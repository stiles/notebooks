from __future__ import absolute_import

from datetime import datetime
from time import strptime

from scheme.exceptions import *
from scheme.field import *
from scheme.timezone import *

__all__ = ('DateTime',)

class DateTime(Field):
    """A field for ``datetime`` values."""

    basetype = 'datetime'
    equivalent = datetime
    parameters = {'maximum': None, 'minimum': None, 'utc': False}
    pattern = '%Y-%m-%dT%H:%M:%SZ'

    errors = [
        FieldError('invalid', 'invalid value', '%(field)s must be a datetime value'),
        FieldError('minimum', 'minimum value', '%(field)s must not occur before %(minimum)s'),
        FieldError('maximum', 'maximum value', '%(field)s must not occur after %(maximum)s'),
    ]

    def __init__(self, minimum=None, maximum=None, utc=False, **params):
        super(DateTime, self).__init__(**params)
        if utc:
            self.timezone = UTC
        else:
            self.timezone = LOCAL

        if maximum is not None:
            try:
                maximum = self._normalize_value(self._unserialize_value(maximum))
            except InvalidTypeError:
                raise TypeError("argument 'maximum' must be either None, a datetime.datetime,"
                    " or a string in the format 'YYYY-MM-DDTHH:MM:SSZ'")

        if minimum is not None:
            try:
                minimum = self._normalize_value(self._unserialize_value(minimum))
            except InvalidTypeError:
                raise TypeError("argument 'minimum' must be either None, a datetime.datetime,"
                    " or a string in the format 'YYYY-MM-DDTHH:MM:SSZ'")

        self.maximum = maximum
        self.minimum = minimum
        self.utc = utc

    def __repr__(self):
        aspects = []
        if self.minimum is not None:
            aspects.append('minimum=%r' % self.minimum.strftime(self.pattern))
        if self.maximum is not None:
            aspects.append('maximum=%r' % self.maximum.strftime(self.pattern))
        if self.utc:
            aspects.append('utc=True')

        return super(DateTime, self).__repr__(aspects)

    def describe(self, parameters=None, verbose=False):
        params = {}
        if self.maximum:
            params['maximum'] = self.maximum.strftime(self.pattern)
        if self.minimum:
            params['minimum'] = self.minimum.strftime(self.pattern)

        return super(DateTime, self).describe(parameters, verbose, **params)

    def _normalize_value(self, value):
        timezone = self.timezone
        if value.tzinfo is not None:
            if value.tzinfo is timezone:
                return value
            else:
                return value.astimezone(timezone)
        else:
            return value.replace(tzinfo=timezone)

    def _serialize_value(self, value):
        if value.tzinfo is not UTC:
            value = value.astimezone(UTC)
        return value.strftime(self.pattern)

    def _unserialize_value(self, value, ancestry=None):
        if isinstance(value, datetime):
            return value

        try:
            unserialized = datetime(*strptime(value, self.pattern)[:6])
            return unserialized.replace(tzinfo=UTC)
        except Exception:
            raise InvalidTypeError(identity=ancestry, field=self, value=value).construct('invalid')

    def _validate_value(self, value, ancestry):
        if isinstance(value, datetime):
            value = self._normalize_value(value)
        else:
            raise InvalidTypeError(identity=ancestry, field=self, value=value).construct('invalid')

        minimum = self.minimum
        if minimum is not None and value < minimum:
            raise ValidationError(identity=ancestry, field=self, value=value).construct(
                'minimum', minimum=minimum.strftime(self.pattern))

        maximum = self.maximum
        if maximum is not None and value > maximum:
            raise ValidationError(identity=ancestry, field=self, value=value).construct(
                'maximum', maximum=maximum.strftime(self.pattern))

        return value
