from base64 import urlsafe_b64decode, urlsafe_b64encode

from scheme.exceptions import *
from scheme.field import *

__all__ = ('Binary',)

class Binary(Field):
    """A field for binary values."""

    basetype = 'binary'
    equivalent = bytes
    parameters = {'max_length': None, 'min_length': None}

    errors = [
        FieldError('invalid', 'invalid value', '%(field)s must be a binary value'),
        FieldError('min_length', 'minimum length', '%(field)s must contain at least %(min_length)d %(noun)s'),
        FieldError('max_length', 'maximum length', '%(field)s must contain at most %(max_length)d %(noun)s'),
    ]

    def __init__(self, min_length=None, max_length=None, nonempty=False, **params):
        if nonempty:
            params.update(required=True, nonnull=True)
            if min_length is None:
                min_length = 1

        super(Binary, self).__init__(**params)
        if not (min_length is None or (isinstance(min_length, int) and min_length >= 0)):
            raise TypeError("argument 'min_length' must be either None or an integer >= 0")
        if not (max_length is None or (isinstance(max_length, int) and max_length >= 0)):
            raise TypeError("argument 'max_length' must be either None or an integer >= 0")

        self.max_length = max_length
        self.min_length = min_length

    def __repr__(self):
        aspects = []
        if self.min_length is not None:
            aspects.append('min_length=%r' % self.min_length)
        if self.max_length is not None:
            aspects.append('max_length=%r' % self.max_length)
        return super(Binary, self).__repr__(aspects)

    def _serialize_value(self, value):
        return urlsafe_b64encode(value)

    def _unserialize_value(self, value, ancestry):
        if not isinstance(value, bytes):
            raise InvalidTypeError(identity=ancestry, field=self, value=value).construct('invalid')

        return urlsafe_b64decode(value)

    def _validate_value(self, value, ancestry):
        if not isinstance(value, bytes):
            raise InvalidTypeError(identity=ancestry, field=self, value=value).construct('invalid')

        min_length = self.min_length
        if min_length is not None and len(value) < min_length:
            noun = 'byte'
            if min_length > 1:
                noun = 'bytes'
            raise ValidationError(identity=ancestry, field=self, value=value).construct(
                'min_length', min_length=min_length, noun=noun)

        max_length = self.max_length
        if max_length is not None and len(value) > max_length:
            noun = 'byte'
            if max_length > 1:
                noun = 'bytes'
            raise ValidationError(identity=ancestry, field=self, value=value).construct(
                'max_length', max_length=max_length, noun=noun)
