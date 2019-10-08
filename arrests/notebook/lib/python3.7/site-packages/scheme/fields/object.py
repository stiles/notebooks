from scheme.exceptions import *
from scheme.field import *
from scheme.util import *

__all__ = ('Object',)

class Object(Field):
    """A field for references to python objects."""

    basetype = 'object'

    errors = [
        FieldError('invalid', 'invalid value', '%(field)s must be a python object'),
        FieldError('import', 'object import', 'cannot import %(value)r'),
    ]

    def _serialize_value(self, value):
        if isinstance(value, string):
            return value

        try:
            return identify_object(value)
        except TypeError:
            raise InvalidTypeError(field=self, value=value).construct('invalid')

    def _unserialize_value(self, value, ancestry):
        if not isinstance(value, string):
            return value

        try:
            return import_object(value)
        except ImportError:
            raise ValidationError(identity=ancestry, field=self, value=value).construct(
                'import', value=value).capture()
