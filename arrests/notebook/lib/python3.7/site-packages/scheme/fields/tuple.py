from scheme.exceptions import *
from scheme.field import *
from scheme.interpolation import interpolate_parameters
from scheme.util import string

__all__ = ('Tuple',)

class Tuple(Field):
    """A field for fixed-length, heterogeneous sequences of values.

    A tuple contains a fixed-number of items, with each item expected to be a valid value for a
    particular field defined for that item. In python, a tuple field is expressed as a ``tuple``.

    :param values: A ``list`` or ``tuple`` of :class:`Field` instances which defines both the
        fixed length of this field as well as character of each positional value, in order.

    :raises TypeError: when a constructor parameter is invalid
    """

    basetype = 'tuple'
    structural = True

    errors = [
        FieldError('invalid', 'invalid value', '%(field)s must be a tuple'),
        FieldError('length', 'invalid length', '%(field)s must contain exactly %(length)d values'),
    ]

    def __init__(self, values, **params):
        super(Tuple, self).__init__(**params)
        if not (isinstance(values, (list, tuple)) and values):
            raise TypeError("argument 'values' must be a list or tuple value containing"
                " at least one Field instance")

        stack = []
        for i, field in enumerate(values):
            if isinstance(field, Undefined):
                if field.field:
                    stack.append(field.field)
                else:
                    field.register(self._define_undefined_field, i)
                    stack.append(field)
            elif isinstance(field, Field):
                stack.append(field)
            else:
                raise TypeError("argument 'values' must be a list or tuple value containing"
                    " at least one Field instance")

        self.values = tuple(stack)

    def __repr__(self):
        return super(Tuple, self).__repr__(['values=%r' % (self.values,)])

    def describe(self, parameters=None, verbose=False):
        values = []
        for value in self.values:
            values.append(value.describe(parameters, verbose))

        default = None
        if self.default:
            default = []
            for field, value in zip(self.values, self.default):
                default.append(field.process(value, OUTBOUND, True))
            default = tuple(default)

        return super(Tuple, self).describe(parameters, verbose,
            values=values, default=default)

    def extract(self, subject, strict=True, **params):
        if params and not self.screen(**params):
            raise FieldExcludedError(self)

        if subject is None:
            return None

        if self.extractor:
            try:
                subject = self.extractor(self, subject)
            except Exception:
                raise CannotExtractError("extractor raised exception")

        if not isinstance(subject, (list, tuple)):
            raise CannotExtractError('extraction candidate must be a list or tuple value')

        extraction = []
        for i, definition in enumerate(self.values):
            try:
                extraction.append(definition.extract(subject[i], strict, **params))
            except FieldExcludedError:
                pass
            except AttributeError:
                if isinstance(definition, Undefined):
                    raise UndefinedFieldError("field %r of this tuple is undefined" % i)
                else:
                    raise

        return tuple(extraction)

    def filter(self, all=False, **params):
        if not super(Tuple, self).filter(all, **params):
            return None

        filtered = False
        candidates = []

        for i, field in enumerate(self.values):
            candidate = field.filter(all, **params)
            if candidate is not None:
                candidates.append(candidate)
                if candidate is not field:
                    filtered = True
            else:
                raise CannotFilterError(self)

        if filtered:
            return self.clone(values=tuple(candidates))
        else:
            return self

    def get(self, key, default=None):
        try:
            return self.values[key]
        except IndexError:
            return default

    def instantiate(self, value, key=None):
        if value is None:
            return None

        candidate = []
        for i, field in enumerate(self.values):
            try:
                candidate.append(field.instantiate(value[i]))
            except AttributeError:
                if isinstance(field, Undefined):
                    raise UndefinedFieldError("field %r of this tuple is undefined" % i)
                else:
                    raise

        return super(Tuple, self).instantiate(tuple(candidate), key)

    def interpolate(self, subject, parameters, interpolator=None):
        if subject is None:
            return None

        if isinstance(subject, string):
            subject = interpolate_parameters(subject, parameters, True, interpolator)

        if not isinstance(subject, (list, tuple)):
            raise CannotInterpolateError('interpolation candidate must be a list or tuple')

        interpolation = []
        for i, definition in enumerate(self.values):
            try:
                interpolation.append(definition.interpolate(subject[i], parameters, interpolator))
            except AttributeError:
                if isinstance(definition, Undefined):
                    raise UndefinedFieldError("field %r of this tuple is undefined" % i)
                else:
                    raise

        return tuple(interpolation)

    def process(self, value, phase=INBOUND, serialized=False, ancestry=None):
        if not ancestry:
            ancestry = [self.guaranteed_name]

        if self._is_null(value, ancestry):
            return None
        if not isinstance(value, (list, tuple)):
            raise InvalidTypeError(identity=ancestry, field=self, value=value).construct('invalid')
        if self.preprocessor:
            value = self.preprocessor(value)

        values = self.values
        if len(value) != len(values):
            raise ValidationError(identity=ancestry, field=self, value=value).construct(
                'length', length=len(values))

        valid = True
        sequence = []

        for i, field in enumerate(values):
            try:
                sequence.append(field.process(value[i], phase, serialized,
                    ancestry + ['[%s]' % i]))
            except StructuralError as exception:
                valid = False
                sequence.append(exception)
            except AttributeError:
                if isinstance(field, Undefined):
                    raise UndefinedFieldError("field %r of this tuple is undefined" % i)
                else:
                    raise

        if valid:
            return tuple(sequence)
        else:
            raise ValidationError(identity=ancestry, field=self, value=value, structure=sequence)

    def transform(self, transformer):
        candidate = transformer(self)
        if isinstance(candidate, Field):
            return candidate
        elif candidate is False:
            return self

        transformed = False
        candidates = []

        for i, field in enumerate(self.values):
            candidate = field.transform(transformer)
            if candidate is not field:
                candidates.append(candidate)
                transformed = True
            else:
                candidates.append(field)

        if transformed:
            return self.clone(values=tuple(candidates))
        else:
            return self

    def _define_undefined_field(self, field, idx):
        self.values = tuple(list(self.values[:idx]) + [field] + list(self.values[idx + 1:]))

    @classmethod
    def _visit_field(cls, specification, callback):
        return {'values': tuple([callback(field) for field in specification['values']])}
