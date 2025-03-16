import os

from scheme.util import with_metaclass

__all__ = ('Format',)

class FormatMeta(type):
    def __new__(metatype, name, bases, namespace):
        format = type.__new__(metatype, name, bases, namespace)
        if not format.name:
            return format

        if format.extensions:
            for extension in format.extensions:
                if extension[0] == '.':
                    format.formats[extension] = format

        format.formats[format.name] = format
        if format.mimetype:
            format.formats[format.mimetype] = format

        format.formats[format] = format
        return format

@with_metaclass(FormatMeta)
class Format(object):
    """A data format."""

    formats = {}

    extensions = None
    mimetype = None
    name = None

    @classmethod
    def read(cls, path, format=None, schema=None, quiet=False, **params):
        if not (path and os.path.exists(path)):
            if quiet:
                return False
            else:
                raise ValueError(path)

        if format:
            if format in cls.formats:
                format = cls.formats[format]
            else:
                raise ValueError(format)
        elif cls.name:
            format = cls
        else:
            extension = os.path.splitext(path)[-1].lower()
            if extension in cls.formats:
                format = cls.formats[extension]
            else:
                raise ValueError(format)

        with open(path) as openfile:
            return format.unserialize(openfile.read(), schema, **params)

    @classmethod
    def serialize(cls, value, format, schema=None, **params):
        return cls.formats[format].serialize(value, schema, **params)

    @classmethod
    def unserialize(cls, value, format, schema=None, **params):
        return cls.formats[format].unserialize(value, schema, **params)

    @classmethod
    def write(cls, path, value, format=None, schema=None, **params):
        if format:
            if format in cls.formats:
                format = cls.formats[format]
            else:
                raise ValueError(format)
        elif cls.name:
            format = cls
        else:
            extension = os.path.splitext(path)[-1].lower()
            if extension in cls.formats:
                format = cls.formats[extension]
            else:
                raise ValueError(format)

        with open(path, 'w+') as openfile:
            openfile.write(format.serialize(value, schema, **params))
