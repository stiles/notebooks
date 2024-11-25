from scheme.exceptions import *
from scheme.field import *
from scheme.interpolation import interpolate_parameters
from scheme.util import string

__all__ = ('Map',)

class Map(Field):
    """A field for homogeneous mappings of key/value pairs.

    A map can contain any number of key/value pairs, but each key and each value must respectfully
    by a valid value for the corresponding ``key`` and ``value`` fields defined for the map. In
    python, a map value is expressed as a ``dict`'.

    In contrast to :class:`Structure`, the keys of a map are not specified as part of the field
    definition.

    :param value: A :class:`Field` instance which defines the values that can be contained by
        a valid map value for this field.

    :param key: Optional, default is ``None``; if specified, a :class:`Field` instance which
        defines the keys that can be contained by a valid map value for this field. If ``None``,
        the field will accept any ``str`` value for keys.

    :param list required_keys: Optional, default is ``None``; if specified, a list of keys required
        to be present in a valid map value for this field. Each such key must be a valid value for
        the field specified for ``key``. Can also be specified as a single space-delimited string,
        when ``key`` is string-based.

    :raises TypeError: when a constructor parameter is invalid
    """

    basetype = 'map'
    parameters = {'required_keys': None}
    structural = True

    errors = [
        FieldError('invalid', 'invalid value', '%(field)s must be a map'),
        FieldError('invalidkeys', 'invalid keys', '%(field)s must have valid keys'),
        FieldError('required', 'required key', "%(field)s is missing required key '%(name)s'"),
    ]

    def __init__(self, value, key=None, required_keys=None, **params):
        super(Map, self).__init__(**params)
        if isinstance(value, Undefined):
            if value.field:
                value = value.field
            else:
                value.register(self._define_undefined_field)
        elif not isinstance(value, Field):
            raise TypeError("argument 'value' must be a Field instance")

        if key is not None and not isinstance(key, Field):
            raise TypeError("argument 'key' must be either None or a Field instance")

        if isinstance(required_keys, string):
            required_keys = required_keys.split(' ')
        if required_keys is not None and not isinstance(required_keys, (list, tuple)):
            raise TypeError("argument 'required_keys' must be either None, a list or tuple of"
                " string values, or a string of space-separated values")

        self.key = key
        self.required_keys = required_keys
        self.value = value

    def __repr__(self):
        aspects = []
        if self.key:
            aspects.append('key=%r' % self.key)

        aspects.append('value=%r' % self.value)
        if self.required_keys:
            aspects.append('required_keys=%r' % sorted(self.required_keys))
        
        return super(Map, self).__repr__(aspects)

    def describe(self, parameters=None, verbose=False):
        default = None
        if self.default:
            default = {}
            for key, value in self.default.items():
                default[key] = self.value.process(value, OUTBOUND, True)

        params = {'value': self.value.describe(parameters, verbose), 'default': default}
        if self.key:
            params['key'] = self.key.describe(parameters, verbose)

        return super(Map, self).describe(parameters, verbose, **params)

    def extract(self, subject, strict=True, **params):
        if params and not self.screen(**params):
            raise FieldExcludedError(self)

        if subject is None:
            return None

        if self.extractor:
            try:
                subject = self.extractor(self, subject)
            except Exception:
                raise CannotExtractError('extractor raised exception')

        if not isinstance(subject, dict):
            raise CannotExtractError('extraction candidate must be a dict value')

        definition = self.value
        extraction = {}

        for key, value in subject.items():
            try:
                extraction[key] = definition.extract(value, strict, **params)
            except FieldExcludedError:
                pass
            except AttributeError:
                if isinstance(definition, Undefined):
                    raise UndefinedFieldError("the 'value' field of this map is undefined")
                else:
                    raise

        return extraction

    def filter(self, all=False, **params):
        if not super(Map, self).filter(all, **params):
            return None

        value = self.value.filter(self.value, **params)
        if value is self.value:
            return self
        elif value:
            return self.clone(value=value)
        else:
            raise CannotFilterError(self)

    def instantiate(self, value, key=None):
        if value is None:
            return None

        definition = self.value
        candidate = {}

        for k, v in value.items():
            try:
                candidate[k] = definition.instantiate(v, k)
            except AttributeError:
                if isinstance(definition, Undefined):
                    raise UndefinedFieldError("the 'value' field of this map is undefined")
                else:
                    raise

        return super(Map, self).instantiate(candidate, key)

    def interpolate(self, subject, parameters, interpolator=None):
        if subject is None:
            return None

        if isinstance(subject, string):
            subject = interpolate_parameters(subject, parameters, True, interpolator)

        if not isinstance(subject, dict):
            raise CannotInterpolateError('interpolation candidate must be a dict value')

        definition = self.value
        interpolation = {}

        for key, value in subject.items():
            try:
                interpolation[key] = definition.interpolate(value, parameters, interpolator)
            except UndefinedParameterError:
                continue
            except AttributeError:
                if isinstance(definition, Undefined):
                    raise UndefinedFieldError("the 'value' field of this map is undefined")
                else:
                    raise

        return interpolation

    def process(self, value, phase=INBOUND, serialized=False, ancestry=None):
        if not ancestry:
            ancestry = [self.guaranteed_name]

        if self._is_null(value, ancestry):
            return None

        if not isinstance(value, dict):
            raise InvalidTypeError(identity=ancestry, field=self, value=value).construct('invalid')

        if self.preprocessor:
            value = self.preprocessor(value)

        valid = True
        key_field = self.key
        value_field = self.value

        map = {}
        for name, subvalue in value.items():
            if key_field:
                try:
                    name = key_field.process(name, phase, serialized, ancestry + ['[%s]' % name])
                except StructuralError as exception:
                    raise ValidationError(identity=ancestry, field=self, value=value).construct('invalidkeys')
            elif not isinstance(name, string):
                raise ValidationError(identity=ancestry, field=self, value=value).construct('invalidkeys')

            try:
                map[name] = value_field.process(subvalue, phase, serialized, ancestry + ['[%s]' % name])
            except StructuralError as exception:
                valid = False
                map[name] = exception
            except AttributeError:
                if isinstance(value_field, Undefined):
                    raise UndefinedFieldError('the value field of this map is undefined')
                else:
                    raise

        if self.required_keys:
            for name in self.required_keys:
                if name not in map:
                    valid = False
                    map[name] = ValidationError(identity=ancestry, field=self).construct(
                        'required', name=name)

        if valid:
            return map
        else:
            raise ValidationError(identity=ancestry, field=self, value=value, structure=map)

    def transform(self, transformer):
        candidate = transformer(self)
        if isinstance(candidate, Field):
            return candidate
        elif candidate is False:
            return self

        candidate = self.value.transform(transformer)
        if candidate is self.value:
            return self
        else:
            return self.clone(value=candidate)

    def _define_undefined_field(self, field):
        self.value = field

    @classmethod
    def _visit_field(cls, specification, callback):
        params = {'value': callback(specification['value'])}
        if 'key' in specification:
            params['key'] = callback(specification['key'])
        return params
