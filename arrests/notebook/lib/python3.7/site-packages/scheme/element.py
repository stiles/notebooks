from scheme.fields import *
from scheme.util import with_metaclass

__all__ = ('Element',)

class ElementMeta(type):
    def __new__(metatype, name, bases, namespace):
        element = type.__new__(metatype, name, bases, namespace)
        if element.polymorphic_identity:
            base = bases[0]
            if getattr(base, '__polymorphic_on__', None):
                base.__polymorphic_impl__[element.polymorphic_identity] = element
                return element
            else:
                raise ValueError("an Element declaration which specifies 'polymorphic_identity'"
                    " must inherit from a polymorphic base Element")

        if element.schema is None:
            return element

        element.__polymorphic_on__ = None
        schema = element.schema

        if isinstance(schema, Structure):
            element.__attrs__ = schema.generate_defaults(sparse=False)
            if schema.polymorphic:
                element.__polymorphic_on__ = schema.polymorphic_on.name
                element.__polymorphic_impl__ = {}
        elif isinstance(schema, Field):
            if schema.name:
                element.__attrs__ = {schema.name: schema.default}
            else:
                raise ValueError("class attribute 'schema' must have a valid 'name' attribute")
        else:
            raise TypeError("class attribute 'schema' must be either None or a Field instance")

        schema.instantiator = element.instantiate
        schema.extractor = element.extract
        return element

@with_metaclass(ElementMeta)
class Element(object):
    """A representational class for schema-based objects.

    A subclass of Element is defined by an associated schema, which is typically though not
    always a :class:`Structure`, and provides a fluent, object-based approach to working
    with values for that schema.

    Consider this example::

        class Document(Element):
            schema = Structure({
                'name': Text(nonempty=True),
                'description': Text(),
            }, nonnull=True)


    :var str key_atr: Optional, default is ``None``; if specified at the class level,
        indicates...

    :var str polymorphic_identity: Optional, default is ``None``; if specified at the class level,
        indicates ...

    :var schema: The :class:`Field` instance which defines the schema for this subclass of
        Element.
    """

    key_attr = None
    polymorphic_identity = None
    schema = None

    def __init__(self, **params):
        polymorphic_on = self.__polymorphic_on__
        if polymorphic_on:
            defaults = self.__attrs__[params[polymorphic_on]]
        else:
            defaults = self.__attrs__

        for attr, default in defaults.items():
            setattr(self, attr, params.get(attr, default))

    def __repr__(self):
        aspects = []
        for attr in ('id', 'name', 'title'):
            value = getattr(self, attr, None)
            if value is not None:
                aspects.append('%s=%r' % (attr, value))
        
        return '%s(%s)' % (type(self).__name__, ', '.join(aspects))

    @classmethod
    def extract(cls, field, subject):
        if isinstance(field, Structure):
            return subject.__dict__
        else:
            return getattr(subject, field.name)

    @classmethod
    def instantiate(cls, field, value, key=None):
        instance = None
        if isinstance(field, Structure):
            polymorphic_on = cls.__polymorphic_on__
            if polymorphic_on:
                identity = value[polymorphic_on]
                if identity in cls.__polymorphic_impl__:
                    impl = cls.__polymorphic_impl__[identity]
                    instance = impl(**value)
            if instance is None:
                instance = cls(**value)
        else:
            instance = cls(**{field.name: value})

        if key is not None and cls.key_attr:
            setattr(instance, cls.key_attr, key)

        return instance

    def serialize(self, format=None):
        schema = self.__class__.schema
        return schema.serialize(schema.extract(self), format)

    @classmethod
    def unserialize(cls, value, format=None):
        return cls.schema.instantiate(cls.schema.unserialize(value, format))
