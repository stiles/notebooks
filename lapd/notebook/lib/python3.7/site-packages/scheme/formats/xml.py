from __future__ import absolute_import

import xml.etree.cElementTree as etree

from scheme.field import Field
from scheme.format import Format

__all__ = ('Xml',)

class Xml(Format):
    extensions = ['.xml']
    mimetype = 'application/xml'
    name = 'xml'

    default_root = 'root'
    preamble = '<?xml version="1.0"?>'

    @classmethod
    def serialize(cls, value, schema, preamble=True):
        if not isinstance(schema, Field):
            raise TypeError(schema)

        element = etree.Element(schema.name or cls.default_root)
        cls._serialize_content(value, element, schema)

        serialized = etree.tostring(element).decode('us-ascii')
        if preamble:
            serialized = cls.preamble + serialized

        return serialized

    @classmethod
    def unserialize(cls, value, schema):
        if not isinstance(schema, Field):
            raise TypeError(schema)

        root = etree.fromstring(value)
        attr, value = cls._unserialize_element(root, schema)
        return value

    @classmethod
    def _serialize_content(cls, content, element, field):
        if content is None:
            element.set('null', 'true')
        elif field.type == 'boolean':
            if content:
                element.text = 'true'
            else:
                element.text = 'false'
        elif field.type == 'structure':
            if content:
                for key, value in sorted(content.items()):
                    subelement = etree.SubElement(element, key)
                    cls._serialize_content(value, subelement, field.structure[key])
        elif field.type == 'map':
            if content:
                for key, value in sorted(content.items()):
                    subelement = etree.SubElement(element, key)
                    cls._serialize_content(value, subelement, field.value)
        elif field.type == 'sequence':
            if content:
                title = field.item.name or 'item'
                for value in content:
                    subelement = etree.SubElement(element, title)
                    cls._serialize_content(value, subelement, field.item)
        elif field.type == 'tuple':
            if content:
                for subfield, value in zip(field.values, content):
                    subelement = etree.SubElement(element, subfield.name or 'value')
                    cls._serialize_content(value, subelement, subfield)
        elif field.type == 'union':
            raise NotImplementedError()
        else:
            element.text = str(content)

    @classmethod
    def _unserialize_element(cls, element, field):
        attr = element.tag
        if element.get('null', False):
            return attr, None
        elif field.type == 'boolean':
            return attr, (element.text.lower() == 'true')
        elif field.type == 'float':
            return attr, float(element.text)
        elif field.type == 'integer':
            return attr, int(element.text)
        elif field.type == 'map':
            return attr, dict(cls._unserialize_element(v, field.value) for v in element)
        elif field.type == 'sequence':
            return attr, [cls._unserialize_element(v, field.item)[1] for v in element]
        elif field.type == 'structure':
            return attr, dict(cls._unserialize_element(v, field.structure[v.tag])
                for v in element)
        elif field.type == 'tuple':
            return attr, tuple(cls._unserialize_element(v, field.values[i])[1]
                for i, v in enumerate(element))
        elif field.type == 'union':
            raise NotImplementedError()
        else:
            return attr, element.text
