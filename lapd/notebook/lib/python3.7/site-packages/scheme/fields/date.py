from __future__ import absolute_import

from datetime import date
from time import strptime

from scheme.exceptions import *
from scheme.field import *

__all__ = ('Date',)

class Date(Field):
    """A field for ``date`` values.

    :param minimum: Optional, default is ``None``; the earliest valid value for this field, as
        either a ``date`` value or a ``str`` in the format ``YYYY-MM-DD``.
    """

    basetype = 'date'
    equivalent = date
    parameters = {'maximum': None, 'minimum': None}
    pattern = '%Y-%m-%d'

    errors = [
        FieldError('invalid', 'invalid value', '%(field)s must be a date value'),
        FieldError('minimum', 'minimum value', '%(field)s must not occur before %(minimum)s'),
        FieldError('maximum', 'maximum value', '%(field)s must not occur after %(maximum)s'),
    ]

    def __init__(self, minimum=None, maximum=None, **params):
        super(Date, self).__init__(**params)
        if maximum is not None:
            try:
                maximum = self._unserialize_value(maximum)
            except InvalidTypeError:
                raise TypeError("argument 'maximum' must be either None, a datetime.date,"
                    " or a string in the format 'YYYY-MM-DD'")

        if minimum is not None:
            try:
                minimum = self._unserialize_value(minimum)
            except InvalidTypeError:
                raise TypeError("argument 'minimum' must be either None, a datetime.date,"
                    " or a string in the format 'YYYY-MM-DD'")

        self.maximum = maximum
        self.minimum = minimum

    def __repr__(self):
        aspects = []
        if self.minimum is not None:
            aspects.append('minimum=%r' % self.minimum.strftime(self.pattern))
        if self.maximum is not None:
            aspects.append('maximum=%r' % self.maximum.strftime(self.pattern))
        return super(Date, self).__repr__(aspects)

    def describe(self, parameters=None, verbose=False):
        params = {}
        if self.maximum is not None:
            params['maximum'] = self.maximum.strftime(self.pattern)
        if self.minimum is not None:
            params['minimum'] = self.minimum.strftime(self.pattern)

        return super(Date, self).describe(parameters, verbose, **params)

    def _serialize_value(self, value):
        return value.strftime(self.pattern)

    def _unserialize_value(self, value, ancestry=None):
        if isinstance(value, date):
            return value

        try:
            return date(*strptime(value, self.pattern)[:3])
        except Exception:
            raise InvalidTypeError(identity=ancestry, field=self, value=value).construct('invalid')

    def _validate_value(self, value, ancestry):
        if not isinstance(value, date):
            raise InvalidTypeError(identity=ancestry, field=self, value=value).construct('invalid')

        minimum = self.minimum
        if minimum is not None and value < minimum:
            raise ValidationError(identity=ancestry, field=self, value=value).construct(
                'minimum', minimum=minimum.strftime(self.pattern))

        maximum = self.maximum
        if maximum is not None and value > maximum:
            raise ValidationError(identity=ancestry, field=self, value=value).construct(
                'maximum', maximum=maximum.strftime(self.pattern))
