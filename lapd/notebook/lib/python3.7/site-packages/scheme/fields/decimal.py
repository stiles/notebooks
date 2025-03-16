from __future__ import absolute_import

from decimal import Decimal as decimal, InvalidOperation

from scheme.exceptions import *
from scheme.field import *
from scheme.interpolation import interpolate_parameters
from scheme.util import string

__all__ = ('Decimal',)

class Decimal(Field):
    """A field for decimal values."""

    basetype = 'decimal'
    equivalent = decimal

    errors = [
        FieldError('invalid', 'invalid value', '%(field)s must be a decimal value'),
        FieldError('minimum', 'minimum value', '%(field)s must be greater then or equal to %(minimum)s'),
        FieldError('maximum', 'maximum value', '%(field)s must be less then or equal to %(maximum)s'),
    ]

    def __init__(self, minimum=None, maximum=None, **params):
        super(Decimal, self).__init__(**params)

        if isinstance(minimum, string):
            try:
                minimum = decimal(minimum)
            except InvalidOperation:
                raise TypeError("argument 'minimum' must be either None, a decimal.Decimal value,"
                    " or a string representing a valid decimal value")
        if not (minimum is None or isinstance(minimum, decimal)):
            raise TypeError("argument 'minimum' must be either None, a decimal.Decimal value,"
                " or a string representing a valid decimal value")

        if isinstance(maximum, string):
            try:
                maximum = decimal(maximum)
            except InvalidOperation:
                raise TypeError("argument 'maximum' must be either None, a decimal.Decimal value,"
                    " or a string representing a valid decimal value")
        if not (maximum is None or isinstance(maximum, decimal)):
            raise TypeError("argument 'maximum' must be either None, a decimal.Decimal value,"
                " or a string representing a valid decimal value")

        self.maximum = maximum
        self.minimum = minimum

    def __repr__(self):
        aspects = []
        if self.minimum is not None:
            aspects.append('minimum=%r' % self.minimum)
        if self.maximum is not None:
            aspects.append('maximum=%r' % self.maximum)
        return super(Decimal, self).__repr__(aspects)

    def describe(self, parameters=None, verbose=False):
        params = {}
        if self.maximum is not None:
            params['maximum'] = str(self.maximum)
        if self.minimum is not None:
            params['minimum'] = str(self.minimum)

        return super(Decimal, self).describe(parameters, verbose, **params)

    def interpolate(self, subject, parameters, interpolator=None):
        if subject is None:
            return None
        elif isinstance(subject, decimal):
            return subject
        else:
            return decimal(interpolate_parameters(subject, parameters, True, interpolator))

    def _serialize_value(self, value):
        return str(value)

    def _unserialize_value(self, value, ancestry):
        if isinstance(value, decimal):
            return value

        try:
            return decimal(value)
        except Exception:
            raise InvalidTypeError(identity=ancestry, field=self, value=value).construct('invalid')

    def _validate_value(self, value, ancestry):
        if not isinstance(value, decimal):
            raise InvalidTypeError(identity=ancestry, field=self, value=value).construct('invalid')

        minimum = self.minimum
        if minimum is not None and value < minimum:
            raise ValidationError(identity=ancestry, field=self, value=value).construct(
                'minimum', minimum=minimum)

        maximum = self.maximum
        if maximum is not None and value > maximum:
            raise ValidationError(identity=ancestry, field=self, value=value).construct(
                'maximum', maximum=maximum)
