from scheme.exceptions import *
from scheme.field import *

__all__ = ('Boolean',)

class Boolean(Field):
    """A field for boolean values."""

    basetype = 'boolean'
    equivalent = bool

    errors = [
        FieldError('invalid', 'invalid value', '%(field)s must be a boolean value'),
    ]

    def _validate_value(self, value, ancestry):
        if not isinstance(value, bool):
            raise InvalidTypeError(identity=ancestry, field=self, value=value).construct('invalid')
