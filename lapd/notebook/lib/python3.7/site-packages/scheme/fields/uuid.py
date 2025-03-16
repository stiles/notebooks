import re

from scheme.exceptions import *
from scheme.field import *
from scheme.interpolation import interpolate_parameters
from scheme.util import string

__all__ = ('UUID',)

class UUID(Field):
    """A field for UUID values."""

    basetype = 'text'
    pattern = re.compile(r'^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$')

    errors = [
        FieldError('invalid', 'invalid value', '%(field)s must be a UUID')
    ]

    def __init__(self, **params):
        super(UUID, self).__init__(**params)

    def interpolate(self, subject, parameters, interpolator=None):
        if subject is None:
            return subject
        else:
            return interpolate_parameters(subject, parameters, True, interpolator)

    def _validate_value(self, value, ancestry):
        if not (isinstance(value, string) and self.pattern.match(value)):
            raise InvalidTypeError(identity=ancestry, field=self,
                value=value).construct('invalid')
