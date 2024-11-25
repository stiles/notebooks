from __future__ import absolute_import

from datetime import time
from time import strptime

from scheme.exceptions import *
from scheme.field import *

__all__ = ('Time',)

class Time(Field):
    """A field for time values."""

    basetype = 'time'
    equivalent = time
    parameters = {'maximum': None, 'minimum': None}
    pattern = '%H:%M:%S'

    errors = [
        FieldError('invalid', 'invalid value', '%(field)s must be a time value'),
        FieldError('minimum', 'minimum value', '%(field)s must not occur before %(minimum)s'),
        FieldError('maximum', 'maximum value', '%(field)s must not occur after %(maximum)s'),
    ]

    def __init__(self, minimum=None, maximum=None, **params):
        super(Time, self).__init__(**params)
        if maximum is not None:
            try:
                maximum = self._unserialize_value(maximum)
            except InvalidTypeError:
                raise TypeError("argument 'maximum' must be either None, a datetime.time,"
                    " or a string in the format 'HH:MM:SS'")

        if minimum is not None:
            try:
                minimum = self._unserialize_value(minimum)
            except InvalidTypeError:
                raise TypeError("argument 'minimum' must be either None, a datetime.time,"
                    " or a string in the format 'HH:MM:SS'")

        self.maximum = maximum
        self.minimum = minimum

    def __repr__(self):
        aspects = []
        if self.minimum is not None:
            aspects.append('minimum=%r' % self.minimum)
        if self.maximum is not None:
            aspects.append('maximum=%r' % self.maximum)
        return super(Time, self).__repr__(aspects)

    def describe(self, parameters=None, verbose=False):
        params = {}
        if self.maximum is not None:
            params['maximum'] = self.maximum.strftime(self.pattern)
        if self.minimum is not None:
            params['minimum'] = self.minimum.strftime(self.pattern)

        return super(Time, self).describe(parameters=parameters, verbose=verbose, **params)

    def _serialize_value(self, value):
        return value.strftime(self.pattern)

    def _unserialize_value(self, value, ancestry=None):
        if isinstance(value, time):
            return value

        try:
            return time(*strptime(value, self.pattern)[3:6])
        except Exception:
            raise InvalidTypeError(identity=ancestry, field=self,
                value=value).construct('invalid')

    def _validate_value(self, value, ancestry):
        if not isinstance(value, time):
            raise InvalidTypeError(identity=ancestry, field=self,
                value=value).construct('invalid')

        minimum = self.minimum
        if minimum is not None and value < minimum:
            raise ValidationError(identity=ancestry, field=self, value=value).construct('minimum',
                minimum=minimum.strftime(self.pattern))

        maximum = self.maximum
        if maximum is not None and value > maximum:
            raise ValidationError(identity=ancestry, field=self, value=value).construct('maximum',
                maximum=maximum.strftime(self.pattern))
