import re

from scheme.exceptions import *
from scheme.field import *
from scheme.interpolation import interpolate_parameters
from scheme.util import string

__all__ = ('Text',)

class Text(Field):
    """A field for text values."""

    basetype = 'text'
    parameters = {'max_length': None, 'min_length': None, 'strip': True}
    pattern = None

    errors = [
        FieldError('invalid', 'invalid value', '%(field)s must be a textual value'),
        FieldError('pattern', 'invalid value', '%(field)s has an invalid value'),
        FieldError('min_length', 'minimum length', 
            '%(field)s must contain at least %(min_length)d non-whitespace %(noun)s'),
        FieldError('max_length', 'maximum length',
            '%(field)s may contain at most %(max_length)d %(noun)s'),
    ]

    def __init__(self, pattern=None, min_length=None, max_length=None, strip=True,
            nonempty=False, **params):

        if nonempty:
            params.update(required=True, nonnull=True)
            if min_length is None:
                min_length = 1

        super(Text, self).__init__(**params)
        if isinstance(pattern, string):
            pattern = re.compile(pattern)

        if not (min_length is None or (isinstance(min_length, int) and min_length >= 0)):
            raise TypeError("argument 'min_length' must be either None or an integer >= 0")
        if not (max_length is None or (isinstance(max_length, int) and max_length >= 0)):
            raise TypeError("argument 'max_length' must be either None or an integer >= 0")

        self.max_length = max_length
        self.min_length = min_length
        self.pattern = pattern
        self.strip = strip

    def __repr__(self, aspects=None):
        if not aspects:
            aspects = []
        if self.min_length is not None:
            aspects.append('min_length=%r' % self.min_length)
        if self.max_length is not None:
            aspects.append('max_length=%r' % self.max_length)
        if not self.strip:
            aspects.append('strip=False')
        return super(Text, self).__repr__(aspects)

    def interpolate(self, subject, parameters, interpolator=None):
        if subject is None:
            return None
        else:
            return interpolate_parameters(subject, parameters, interpolator=interpolator)

    def _validate_value(self, value, ancestry):
        if not isinstance(value, string):
            raise InvalidTypeError(identity=ancestry, field=self, value=value).construct('invalid')
        if self.strip:
            value = value.strip()

        min_length = self.min_length
        if min_length is not None and len(value) < min_length:
            noun = 'character'
            if min_length > 1:
                noun = 'characters'
            raise ValidationError(identity=ancestry, field=self, value=value).construct('min_length',
                min_length=min_length, noun=noun)

        max_length = self.max_length
        if max_length is not None and len(value) > max_length:
            noun = 'character'
            if max_length > 1:
                noun = 'characters'
            raise ValidationError(identity=ancestry, field=self, value=value).construct('max_length',
                max_length=max_length, noun=noun)

        if self.pattern and not self.pattern.match(value):
            raise ValidationError(identity=ancestry, field=self, value=value).construct('pattern')

        return value
