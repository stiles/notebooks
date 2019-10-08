from scheme.exceptions import *
from scheme.field import *
from scheme.interpolation import interpolate_parameters
from scheme.surrogate import surrogate
from scheme.util import string

__all__ = ('Surrogate',)

class Surrogate(Field):
    """A field for surrogates."""

    basetype = 'structure'
    equivalent = surrogate
    parameters = {'valid_surrogates': None}

    errors = [
        FieldError('invalid', 'invalid value', '%(field)s must be a surrogate'),
        FieldError('invalid-surrogate', 'invalid surrogate', '%(field)s must be one of %(surrogate)s'),
    ]

    def __init__(self, valid_surrogates=None, **params):
        super(Surrogate, self).__init__(**params)
        if isinstance(valid_surrogates, string):
            valid_surrogates = valid_surrogates.split(' ')
        if valid_surrogates:
            self.valid_surrogates = tuple(valid_surrogates)
        else:
            self.valid_surrogates = None

    def __repr__(self):
        aspects = []
        if self.valid_surrogates:
            aspects.append('valid_surrogates=%r' % sorted(self.valid_surrogates))
        return super(Surrogate, self).__repr__(aspects)

    def interpolate(self, subject, parameters, interpolator=None):
        if subject is None:
            return subject
        if isinstance(subject, string):
            subject = interpolate_parameters(subject, parameters, True, interpolator)

        if isinstance(subject, surrogate):
            return subject
        elif isinstance(subject, dict):
            return surrogate.interpolate(subject, parameters, interpolator)
        else:
            raise ValueError(subject)

    def _serialize_value(self, value):
        return value.serialize()

    def _unserialize_value(self, value, ancestry):
        if isinstance(value, dict):
            return surrogate.unserialize(value, ancestry)
        elif isinstance(value, surrogate):
            return value
        else:
            raise InvalidTypeError(identity=ancestry, field=self,
                value=value).construct('invalid')

    def _validate_value(self, value, ancestry):
        if not isinstance(value, surrogate):
            raise InvalidTypeError(identity=ancestry, field=self, value=value).construct('invalid')

        if self.valid_surrogates and value.identity not in self.valid_surrogates:
            raise ValidationError(identity=ancestry, field=self, value=value).construct(
                'invalid-surrogate', surrogates=', '.join(sorted(self.valid_surrogates)))
