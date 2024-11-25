from scheme.exceptions import *
from scheme.field import *
from scheme.interpolation import interpolate_parameters
from scheme.util import numbers

__all__ = ('Float',)

class Float(Field):
    """A field for ``float`` values."""

    basetype = 'float'
    parameters = {'maximum': None, 'minimum': None}

    errors = [
        FieldError('invalid', 'invalid value', '%(field)s must be a floating-point number'),
        FieldError('minimum', 'minimum value', '%(field)s must be greater then or equal to %(minimum)f'),
        FieldError('maximum', 'maximum value', '%(field)s must be less then or equal to %(maximum)f'),
    ]

    def __init__(self, minimum=None, maximum=None, **params):
        super(Float, self).__init__(**params)
        if not (minimum is None or isinstance(minimum, float)):
            raise TypeError("argument 'minimum' must be either None or a float")
        if not (maximum is None or isinstance(maximum, float)):
            raise TypeError("argument 'maximum' must be either None or a float")

        self.maximum = maximum
        self.minimum = minimum

    def __repr__(self):
        aspects = []
        if self.minimum is not None:
            aspects.append('minimum=%r' % self.minimum)
        if self.maximum is not None:
            aspects.append('maximum=%r' % self.maximum)
        return super(Float, self).__repr__(aspects)

    def interpolate(self, subject, parameters, interpolator=None):
        if subject is None:
            return None
        elif isinstance(subject, numbers):
            return float(subject)
        else:
            return float(interpolate_parameters(subject, parameters, True, interpolator))

    def _unserialize_value(self, value, ancestry):
        try:
            return float(value)
        except Exception:
            raise InvalidTypeError(identity=ancestry, field=self, value=value).construct('invalid')

    def _validate_value(self, value, ancestry):
        if not isinstance(value, float):
            raise InvalidTypeError(identity=ancestry, field=self, value=value).construct('invalid')

        minimum = self.minimum
        if minimum is not None and value < minimum:
            raise ValidationError(identity=ancestry, field=self, value=value).construct(
                'minimum', minimum=minimum)

        maximum = self.maximum
        if maximum is not None and value > maximum:
            raise ValidationError(identity=ancestry, field=self, value=value).construct(
                'maximum', maximum=maximum)
