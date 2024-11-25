from scheme.exceptions import *
from scheme.field import *

__all__ = ('Error',)

class Error(Field):
    """A field for error values."""

    basetype = 'tuple'

    errors = [
        FieldError('invalid', 'invalid value', '%(field)s must be a structural error'),
    ]

    def _serialize_value(self, value):
        return value.serialize()

    def _unserialize_value(self, value, ancestry):
        if isinstance(value, StructuralError):
            return value
        elif isinstance(value, tuple) and len(value) == 2:
            return StructuralError.unserialize(value)
        else:
            raise InvalidTypeError(identity=ancestry, field=self,
                value=value).construct('invalid')

    def _validate_value(self, value, ancestry):
        if not isinstance(value, StructuralError):
            raise InvalidTypeError(identity=ancestry, field=self,
                value=value).construct('invalid')
