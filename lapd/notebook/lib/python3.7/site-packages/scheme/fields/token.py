import re

from scheme.exceptions import *
from scheme.field import *
from scheme.interpolation import interpolate_parameters
from scheme.util import string

__all__ = ('Token',)

class Token(Field):
    """A field for token values."""

    basetype = 'token'
    pattern = re.compile(r'^\w[-+.\w]*(?<=\w)(?::\w[-+.\w]*(?<=\w))*$')

    errors = [
        FieldError('invalid', 'invalid value', '%(field)s must be a valid token')
    ]

    def __init__(self, segments=None, **params):
        super(Token, self).__init__(**params)
        self.segments = segments

    def __repr__(self):
        aspects = []
        if self.segments is not None:
            aspects.append('segments=%r' % self.segments)
        return super(Token, self).__repr__(aspects)

    def interpolate(self, subject, parameters, interpolator=None):
        if subject is None:
            return subject
        else:
            return interpolate_parameters(subject, parameters, interpolator=interpolator)

    def _validate_value(self, value, ancestry):
        if not (isinstance(value, string) and self.pattern.match(value)):
            raise InvalidTypeError(identity=ancestry, field=self,
                value=value).construct('invalid')

        if self.segments is not None and value.count(':') + 1 != self.segments:
            raise ValidationError(identity=ancestry, field=self,
                value=value).construct('invalid')
