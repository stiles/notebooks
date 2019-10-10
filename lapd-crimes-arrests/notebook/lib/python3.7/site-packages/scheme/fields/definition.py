from scheme.exceptions import *
from scheme.field import *
from scheme.util import string

__all__ = ('Definition',)

class Definition(Field):
    """A field for field definitions."""

    basetype = 'definition'
    parameters = {'valid_fields': None}
    equivalent = Field

    errors = [
        FieldError('invalid', 'invalid value', '%(field)s must be a field definition'),
        FieldError('invalidfield', 'invalid field', '%(field)s must be one of %(fields)s'),
    ]

    def __init__(self, valid_fields=None, **params):
        super(Definition, self).__init__(**params)

        if isinstance(valid_fields, string):
            valid_fields = valid_fields.split(' ')

        if valid_fields:
            if isinstance(valid_fields, (list, tuple)):
                valid_fields = tuple(valid_fields)
                for field in valid_fields:
                    if field not in Field.types:
                        raise ValueError("argument 'valid_fields' must be a list or tuple"
                            " of field types")
            else:
                raise TypeError("argument 'valid_fields' must be either None, a list or tuple"
                    " containing field types, or a space-delimited string containing field"
                    " types")
        else:
            valid_fields = None

        self.valid_fields = valid_fields

    def _serialize_value(self, value):
        return value.describe()

    def _unserialize_value(self, value, ancestry):
        try:
            return Field.reconstruct(value)
        except Exception:
            raise ValidationError(identity=ancestry, field=self,
                value=value).construct('invalid')

    def _validate_value(self, value, ancestry):
        if not isinstance(value, Field):
            raise InvalidTypeError(identity=ancestry, field=self,
                value=value).construct('invalid')

        if self.valid_fields and value.type not in self.valid_fields:
            raise ValidationError(identity=ancestry, field=self,
                value=value).construct('invalidfield',
                fields=', '.join(sorted(self.valid_fields)))
