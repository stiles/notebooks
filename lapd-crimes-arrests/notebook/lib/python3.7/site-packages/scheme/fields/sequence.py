from scheme.exceptions import *
from scheme.field import *
from scheme.interpolation import interpolate_parameters
from scheme.util import pluralize, string

__all__ = ('Sequence',)

class Sequence(Field):
    """A field for variable-length sequences of homogeneous items.

    A sequence can contain any number of items, but each such item must be a valid value for the
    particular ``item`` field defined for the sequence. For python, a sequence is expressed as a
    ``list``.

    :param item: A :class:`Field` instance which defines the items that can be contained by a
        valid sequence value for this field. 

    :param int min_length: Optional, default is ``None``; if specified, as an ``int`` >= 0,
        indicates the minimum number of items that a sequence value must contain to be
        valid for this field.

    :param int max_length: Optional, default is ``None``; if specified, as an ``int`` >= 0,
        indicates the maximum number of items that a sequence value can contain to be
        valid for this field.

    :param boolean unique: Optional, default is ``False``; if ``True``, indicates that a
        valid sequence value for this field cannot contain duplicate items.

    :raises TypeError: when a parameter to the constructor is invalid
    """

    basetype = 'sequence'
    parameters = {'min_length': None, 'max_length': None, 'unique': False}
    structural = True

    errors = [
        FieldError('invalid', 'invalid value', '%(field)s must be a sequence'),
        FieldError('min_length', 'minimum length', '%(field)s must have at least %(min_length)d %(noun)s'),
        FieldError('max_length', 'maximum length', '%(field)s must have at most %(max_length)d %(noun)s'),
        FieldError('duplicate', 'duplicate value', '%(field)s must not have duplicate values'),
    ]

    def __init__(self, item, min_length=None, max_length=None, unique=False, **params):
        super(Sequence, self).__init__(**params)
        if isinstance(item, Undefined):
            if item.field:
                item = item.field
            else:
                item.register(self._define_undefined_field)
        elif not isinstance(item, Field):
            raise TypeError("argument 'item' must be a Field instance")

        if not (min_length is None or (isinstance(min_length, int) and min_length >= 0)):
            raise TypeError("argument 'min_length' must be either None or an integer >= 0")
        if not (max_length is None or (isinstance(max_length, int) and max_length >= 0)):
            raise TypeError("argument 'max_length' must be either None or an integer >= 0")

        self.item = item
        self.max_length = max_length
        self.min_length = min_length
        self.unique = unique

    def __repr__(self):
        aspects = ['item=%r' % self.item]
        if self.min_length is not None:
            aspects.append('min_length=%r' % self.min_length)
        if self.max_length is not None:
            aspects.append('max_length=%r' % self.max_length)
        if self.unique:
            aspects.append('unique=True')
        return super(Sequence, self).__repr__(aspects)

    def describe(self, parameters=None, verbose=False):
        default = None
        if self.default:
            default = [self.item.process(value, OUTBOUND, True) for value in self.default]

        return super(Sequence, self).describe(parameters, verbose,
            item=self.item.describe(parameters, verbose), default=default)

    def extract(self, subject, strict=True, **params):
        if params and not self.screen(**params):
            raise FieldExcludedError(self)

        if subject is None:
            return None

        if self.extractor:
            try:
                subject = self.extractor(self, subject)
            except Exception:
                raise CannotExtractError('extractor failed to return list or tuple value')

        if not isinstance(subject, (list, tuple)):
            raise CannotExtractError('extraction candidate must be a list or tuple value')

        definition = self.item
        extraction = []

        for item in subject:
            try:
                extraction.append(definition.extract(item, strict, **params))
            except FieldExcludedError:
                pass
            except AttributeError:
                if isinstance(definition, Undefined):
                    raise UndefinedFieldError('the item field of this sequence is undefined')
                else:
                    raise

        return extraction

    def filter(self, all=False, **params):
        if not super(Sequence, self).filter(all, **params):
            return None

        item = self.item.filter(all, **params)
        if item is self.item:
            return self
        elif item:
            return self.clone(item=item)
        else:
            raise CannotFilterError(self)

    def instantiate(self, value, key=None):
        if value is None:
            return None

        candidate = []
        for v in value:
            try:
                candidate.append(self.item.instantiate(v))
            except AttributeError:
                if isinstance(self.item, Undefined):
                    raise UndefinedFieldError('the item field of this sequence is undefined')
                else:
                    raise

        return super(Sequence, self).instantiate(candidate, key)

    def interpolate(self, subject, parameters, interpolator=None):
        if subject is None:
            return None

        if isinstance(subject, string):
            subject = interpolate_parameters(subject, parameters, True, interpolator)

        if not isinstance(subject, (list, tuple)):
            raise CannotInterpolateError('interpolation candidate must be a list or tuple value')

        definition = self.item
        interpolation = []

        for item in subject:
            try:
                interpolation.append(definition.interpolate(item, parameters, interpolator))
            except AttributeError:
                if isinstance(definition, Undefined):
                    raise UndefinedFieldError('the item field of this sequence is undefined')
                else:
                    raise

        return interpolation

    def process(self, value, phase=INBOUND, serialized=False, ancestry=None):
        if not ancestry:
            ancestry = [self.guaranteed_name]

        if self._is_null(value, ancestry):
            return None

        if not isinstance(value, list):
            raise InvalidTypeError(identity=ancestry, field=self, value=value).construct('invalid')

        if self.preprocessor:
            value = self.preprocessor(value)

        min_length = self.min_length
        if min_length is not None and len(value) < min_length:
            raise ValidationError(identity=ancestry, field=self, value=value).construct('min_length',
                min_length=min_length, noun=pluralize('item', min_length))

        max_length = self.max_length
        if max_length is not None and len(value) > max_length:
            raise ValidationError(identity=ancestry, field=self, value=value).construct('max_length',
                max_length=max_length, noun=pluralize('item', max_length))

        valid = True
        item = self.item

        sequence = []
        for i, subvalue in enumerate(value):
            try:
                sequence.append(item.process(subvalue, phase, serialized, ancestry + ['[%s]' % i]))
            except StructuralError as exception:
                valid = False
                sequence.append(exception)
            except AttributeError:
                if isinstance(item, Undefined):
                    raise UndefinedFieldError('the item field of this sequence is undefined')
                else:
                    raise

        if not valid:
            raise ValidationError(identity=ancestry, field=self, value=value, structure=sequence)
        elif self.unique and len(set(sequence)) != len(sequence):
            raise ValidationError(identity=ancestry, field=self, value=value).construct('duplicate')
        else:
            return sequence

    def transform(self, transformer):
        candidate = transformer(self)
        if isinstance(candidate, Field):
            return candidate
        elif candidate is False:
            return self

        candidate = self.item.transform(transformer)
        if candidate is self.item:
            return self
        else:
            return self.clone(item=candidate)

    def _define_undefined_field(self, field):
        self.item = field

    @classmethod
    def _visit_field(cls, specification, callback):
        return {'item': callback(specification['item'])}
