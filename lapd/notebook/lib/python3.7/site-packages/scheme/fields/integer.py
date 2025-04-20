from scheme.exceptions import *
from scheme.field import *
from scheme.interpolation import interpolate_parameters
from scheme.util import integers, numbers

__all__ = ('Integer',)

class Integer(Field):
    """A field for integer values."""

    basetype = 'integer'
    parameters = {'maximum': None, 'minimum': None}

    errors = [
        FieldError('invalid', 'invalid value', '%(field)s must be an integer'),
        FieldError('minimum', 'minimum value', '%(field)s must be greater then or equal to %(minimum)d'),
        FieldError('maximum', 'maximum value', '%(field)s must be less then or equal to %(maximum)d'),
    ]

    def __init__(self, minimum=None, maximum=None, **params):
        super(Integer, self).__init__(**params)
        if not (minimum is None or isinstance(minimum, integers)):
            raise TypeError("argument 'minimum' must be either None or an int value")
        if not (maximum is None or isinstance(maximum, integers)):
            raise TypeError("argument 'maximum' must be either None or an int value")

        self.maximum = maximum
        self.minimum = minimum

    def __repr__(self):
        aspects = []
        if self.minimum is not None:
            aspects.append('minimum=%r' % self.minimum)
        if self.maximum is not None:
            aspects.append('maximum=%r' % self.maximum)
        return super(Integer, self).__repr__(aspects)

    def interpolate(self, subject, parameters, interpolator=None):
        if subject is None:
            return None
        elif isinstance(subject, numbers):
            return int(subject)
        else:
            return int(interpolate_parameters(subject, parameters, True, interpolator))

    def _unserialize_value(self, value, ancestry):
        if value is True or value is False:
            raise InvalidTypeError(identity=ancestry, field=self, valid=value).construct('invalid')

        try:
            return int(value)
        except Exception:
            raise InvalidTypeError(identity=ancestry, field=self, value=value).construct('invalid')

    def _validate_value(self, value, ancestry):
        if value is True or value is False or not isinstance(value, integers):
            raise InvalidTypeError(identity=ancestry, field=self, value=value).construct('invalid')

        minimum = self.minimum
        if minimum is not None and value < minimum:
            raise ValidationError(identity=ancestry, field=self, value=value).construct(
                'minimum', minimum=minimum)

        maximum = self.maximum
        if maximum is not None and value > maximum:
            raise ValidationError(identity=ancestry, field=self, value=value).construct(
                'maximum', maximum=maximum)
