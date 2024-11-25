from scheme.exceptions import *
from scheme.field import *
from scheme.interpolation import interpolate_parameters
from scheme.util import string

class Union(Field):
    """A field composed of a union of two or more other fields, which attempts to process values
    deemed valid for any of its participating fields.

    A union expects its participating fields to be in priority order; when processing a value,
    the first field in its list of fields which successfully processes the value prevents any
    further processing.

    The primary use case for union is to support fields which have values of two or more different
    base types, such as a string and an integer. In most cases specifying a proper priority order
    will resolve more ambigious cases.

    :param *fields: All positional arguments.
    """

    basetype = 'union'
    structural = True

    def __init__(self, fields, **params):
        super(Union, self).__init__(**params)
        if not (isinstance(fields, (list, tuple)) and fields):
            raise TypeError('at least one field must be specified for the union')

        stack = []
        for i, field in enumerate(fields):
            if isinstance(field, Undefined):
                if field.field:
                    stack.append(field.field)
                else:
                    field.register(self._define_undefined_field, i)
                    stack.append(field)
            elif isinstance(field, Field):
                stack.append(field)
            else:
                raise TypeError("fields must be Field instances")

        self.fields = tuple(stack)

    def __repr__(self):
        return super(Union, self).__repr__(['fields=%r' % (self.fields,)])

    def describe(self, parameters=None, verbose=False):
        fields = []
        for field in self.fields:
            fields.append(field.describe(parameters, verbose))

        return super(Union, self).describe(parameters, verbose, fields=fields)

    def extract(self, subject, strict=True, **params):
        if params and not self.screen(**params):
            raise FieldExcludedError(self)

        if subject is None:
            return None
        if self.extractor:
            subject = self.extractor(self, subject)

        for field in self.fields:
            try:
                return field.extract(subject, strict, **params)
            except CannotExtractError:
                pass
            except AttributeError:
                if isinstance(field, Undefined):
                    raise UndefinedFieldError('a field of this union is undefined')
                else:
                    raise
        else:
            raise CannotExtractError('union extraction failed')

    def instantiate(self, value):
        raise NotImplementedError()

    def interpolate(self, subject, parameters, interpolator=None):
        if subject is None:
            return None
        if isinstance(subject, string):
            subject = interpolate_parameters(subject, parameters, True, interpolator)

        for field in self.fields:
            try:
                return field.interpolate(subject, parameters, interpolater)
            except CannotInterpolateError:
                pass
            except AttributeError:
                if isinstance(field, Undefined):
                    raise UndefinedFieldError('a field of this union is undefined')
                else:
                    raise
        else:
            raise CannotInterpolateError('union interpolation failed')

    def process(self, value, phase=INBOUND, serialized=False, ancestry=None):
        if not ancestry:
            ancestry = [self.guaranteed_name]
        if self._is_null(value, ancestry):
            return None

        for field in self.fields:
            try:
                return field.process(value, phase, serialized, ancestry)
            except InvalidTypeError:
                pass
            except AttributeError:
                if isinstance(field, Undefined):
                    raise UndefinedFieldError('a field of this union is undefined')
                else:
                    raise
        else:
            raise InvalidTypeError(identity=ancestry, field=self, value=value).construct('invalid')

    def transform(self, transformer):
        candidate = transformer(self)
        if isinstance(candidate, Field):
            return candidate
        elif candidate is False:
            return self

        transformed = False
        candidates = []

        for field in self.fields:
            candidate = field.transform(transformer)
            if candidate is not field:
                candidates.append(candidate)
                transformed = True
            else:
                candidates.append(field)

        if transformed:
            return self.clone(fields=candidates)
        else:
            return self

    def _define_undefined_field(self, field, idx):
        self.fields = tuple(list(self.fields[:idx]) + [field] + list(self.fields[idx + 1:]))

    @classmethod
    def _visit_field(cls, specification, callback):
        return {'fields': tuple([callback(field) for field in specification['fields']])}
