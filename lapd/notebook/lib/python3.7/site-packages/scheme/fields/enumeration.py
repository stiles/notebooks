from scheme.exceptions import *
from scheme.field import *
from scheme.interpolation import interpolate_parameters
from scheme.util import string

__all__ = ('Enumeration',)

class Enumeration(Field):
    """A field for enumerated values."""

    basetype = 'enumeration'
    parameters = {'enumeration': None}

    errors = [
        FieldError('invalid', 'invalid value', '%(field)s must be one of %(values)s')
    ]

    def __init__(self, enumeration, ignored_values=None, **params):
        super(Enumeration, self).__init__(**params)
        if isinstance(enumeration, string):
            enumeration = enumeration.split(' ')

        for value in enumeration:
            if not isinstance(value, NATIVELY_SERIALIZABLE):
                raise TypeError("values in argument 'enumeration' must be natively serializable")

        if isinstance(ignored_values, string):
            ignored_values = ignored_values.split(' ')

        if isinstance(ignored_values, list):
            for value in ignored_values:
                if not isinstance(value, NATIVELY_SERIALIZABLE):
                    raise TypeError("values in argument 'ignored_values' must be natively"
                        " serializable")
        elif ignored_values is not None:
            raise TypeError("argument 'ignored_values' must be either None, a list of natively"
                " serializable values to ignore, or a space-delimited string of values to ignore")

        self.enumeration = enumeration
        self.ignored_values = ignored_values
        self.representation = ', '.join([repr(value) for value in enumeration])

    def __repr__(self):
        return super(Enumeration, self).__repr__(['enumeration=[%s]' % self.representation])

    def interpolate(self, subject, parameters, interpolator=None):
        if subject is None or subject in self.enumeration:
            return subject

        value = interpolate_parameters(subject, parameters, True, interpolator)
        if value in self.enumeration:
            return value
        else:
            raise CannotInterpolateError('subject must be a value in this enumeration')

    def redefine(self, enumeration, strategy='append'):
        if isinstance(enumeration, string):
            enumeration = enumeration.split(' ')
        if strategy == 'append':
            baseline = self.enumeration
        elif strategy == 'replace':
            baseline = []
        else:
            raise ValueError("argument 'strategy' must be either 'append' or 'replace'")

        self.enumeration = list(set(baseline + enumeration))
        self.representation = ', '.join([repr(value) for value in self.enumeration])

    def _is_null(self, value, ancestry):
        ignored_values = self.ignored_values
        if ignored_values and value in ignored_values:
            value = None

        return super(Enumeration, self)._is_null(value, ancestry)

    def _validate_value(self, value, ancestry):
        if value not in self.enumeration:
            raise InvalidTypeError(identity=ancestry, field=self, value=value).construct('invalid',
                values=self.representation)
