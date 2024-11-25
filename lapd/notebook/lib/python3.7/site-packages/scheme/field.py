import re
from copy import deepcopy

from scheme.exceptions import *
from scheme.format import Format
from scheme.interpolation import interpolate_parameters
from scheme.util import *

__all__ = ('INBOUND', 'NATIVELY_SERIALIZABLE', 'OUTBOUND', 'Field', 'FieldError', 'Undefined')

NATIVELY_SERIALIZABLE = tuple(list(numbers) + [string, bool, float, type(None), dict, list, tuple])

INBOUND = 'inbound'
OUTBOUND = 'outbound'

class FieldError(object):
    """A field error."""

    def __init__(self, token, title, message, show_field=True, show_value=True):
        self.message = message
        self.show_field = show_field
        self.show_value = show_value
        self.title = title
        self.token = token

    def format(self, field, params):
        if 'field' not in params:
            params['field'] = field.name or 'unknown-field'
        return self.message % params

class FieldMeta(type):
    def __new__(metatype, name, bases, namespace):
        declared_errors = namespace.pop('errors', ())
        declared_params = namespace.pop('parameters', {})

        field = type.__new__(metatype, name, bases, namespace)
        field.type = name.lower()

        errors = {}
        params = {}

        for base in reversed(bases):
            inherited_errors = getattr(base, 'errors', None)
            if inherited_errors:
                errors.update(inherited_errors)
            inherited_params = getattr(base, 'parameters', None)
            if inherited_params:
                params.update(inherited_params)

        field.errors = errors
        for declared_error in declared_errors:
            errors[declared_error.token] = declared_error

        params.update(declared_params)
        field.parameters = params

        field.types[field.type] = field
        return field

    def reconstruct(field, specification, **params):
        """Reconstructs the field described by ``specification``."""

        if isinstance(specification, Field):
            return specification

        if isinstance(specification, string):
            fieldtype, specification = specification, params
        else:
            try:
                fieldtype = specification.pop('fieldtype')
            except Exception:
                raise ValueError("argument 'specification' must be a dict value properly"
                    " representing a field specification")

        try:
            constructor = field.types[fieldtype]
        except KeyError:
            raise ValueError("argument 'specification' specifies unknown field"
                " type '%s'" % fieldtype)
        else:
            return constructor.construct(**specification)

@with_metaclass(FieldMeta)
class Field(object):
    """The various subclasses of ``Field`` are used to specify the characteristics of particular
    types of data, usually as part of a larger schema. These definitions enable scheme to provide
    serialization/unserialization, validation, interpolation, and various other means of data
    interaction.

    ``Field`` can also be used directly to represent dynamic or otherwise opaque values, provided
    those values are natively serializable by the various supported formats.

    :param string name: The name of this field. Field names should be concise, descriptive, and
        only use characters acceptable as identifiers in common languages.

    :param string description: Optional, default is ``None``; a concise description of this field,
        used for secondary concerns such as introspection and generated documentation.

    :param default: Optional, default is ``None``; the default value for this field when no value
        is present for it when processing this field as part of certain structural fields (such
        as :class:`Structure`). The value specified must be a valid value for this field.

    :param boolean nonnull: Optional, default is ``False``, which indicates a null value is an
        acceptable value for this field. If ``True``, a :exc:`ValidationError` will be raised
        during processing if a null value is encountered for this field.

    :param boolean ignore_null: Optional, default is ``False``, which indicates null values are
        always treated as is. If ``True``, null values will be ignored and treated as if no value
        was present when processing this field as part of certain structural fields (such as
        :class:`Structure`).

    :param boolean required: Optional, default is ``False``. If ``True``, indicates a value
        for this field is required to be present when processing this field as part of certain
        structural fields (such as :class:`Structure`).

    :param constant: Optional, default is ``None``; the constant value which is the only valid
        value for this field, if specified. If a value other than the constant is processed by
        this field a :exc:`ValidationError` will be raised, even when that value would otherwise
        by valid for this field.

    :param string title: Optional, default is ``None``; a natural language title for this field,
        used for secondary concerns such as introspection and generated documentation.

    :param string notes: Optional, default is ``None``; notes.

    :param boolean nonempty: Optional, default is ``False``; if ``True``, is equivalent to
        ``nonnull=True`` and ``required=True``. The intent of ``nonempty`` is to indicate a
        required field that has a meaningful value, and subclasses are free to extend its
        effects to ensure that.
        
    :param instantiator: Optional, default is ``None``; a ``callable`` with the signature
        ``(field, value, key)`` which accepts a valid value for this field and returns an
        instantiated version of it (see ``.instantiate``).

    :param extractor: Optional, default is ``None``; a ``callable`` with the signature
        ``(field, value)`` which accepts a candidate value for this field and returns an
        extracted version of it (see ``.extract``).

    :param preprocessor: Optional, default is ``None``; a ``callable`` with the signature
        ``(value)`` which accepts an unserialized value for this field and returns a
        preprocessed value for validation. Normally, a preprocessor would only make cosmetic
        changes that don't change the nature of the value.

    :param dict aspects: Optional, default is ``None``; a ``dict`` containing extension aspects
        for this field.

    :param \*\*params: Optional; additional keyword parameters will be treated as extension aspects
        for this field (overriding anything specified in ``aspects``, if conflicting).

    When defining a subclass of ``Field``, several class-level attributes should be specified
    on the subclass for proper implementation.
    """

    types = {}

    basetype = None
    equivalent = None
    preprocessor = None
    structural = False

    parameters = {'name': None, 'constant': None, 'description': None, 'default': None,
        'nonnull': False, 'ignore_null': False, 'required': False, 'title': None,
        'notes': None, 'structural': False}

    errors = [
        FieldError('invalid', 'invalid value', '%(field)s is an invalid value'),
        FieldError('nonnull', 'null value', '%(field)s must be a non-null value'),
        FieldError('overflow', 'overflow error', '%(field)s overflowed'),
    ]

    def __init__(self, name=None, description=None, default=None, nonnull=False,
            ignore_null=False, required=False, constant=None, errors=None, title=None,
            notes=None, nonempty=False, instantiator=None, extractor=None,
            preprocessor=None, aspects=None, **params):

        if nonempty:
            nonnull = required = True

        if isinstance(instantiator, string):
            instantiator = import_object(instantiator)
        if instantiator:
            instantiator = getattr(instantiator, '__instantiate__', instantiator)

        if isinstance(extractor, string):
            extractor = import_object(extractor)
        if extractor:
            extractor = getattr(extractor, '__extract__', extractor)

        self.aspects = aspects or {}
        self.constant = constant
        self.default = default
        self.description = description
        self.extractor = extractor
        self.ignore_null = ignore_null
        self.instantiator = instantiator
        self.name = name
        self.notes = notes
        self.nonnull = nonnull
        self.required = required
        self.title = title

        if preprocessor is not None:
            self.preprocessor = preprocessor

        if errors:
            self.errors = self.errors.copy()
            for error in errors:
                self.errors[error.token] = error

        for attr, value in params.items():
            if attr[0] != '_' and value is not None:
                self.aspects[attr] = value

    def __repr__(self, params=None):
        aspects = []
        if self.name:
            aspects.append('name=%r' % self.name)
        if params:
            aspects.extend(params)
        if self.constant:
            aspects.append('constant=True')
        if self.default is not None:
            aspects.append('default=%r' % self.default)
        if self.nonnull:
            aspects.append('nonnull=True')
        if self.required:
            aspects.append('required=True')
        if self.ignore_null:
            aspects.append('ignore_null=True')
        if self.title:
            aspects.append('title=%r' % self.title)
        return '%s(%s)' % (type(self).__name__, ', '.join(aspects))

    def __deepcopy__(self, memo):
        return self.clone()

    def __getattr__(self, name):
        try:
            return super(Field, self).__getattr__(name)
        except AttributeError:
            try:
                return self.aspects[name]
            except KeyError:
                return None

    @property
    def guaranteed_name(self):
        return self.name or '(%s)' % self.type

    def clone(self, **params):
        """Clones this field by deep copying it. All keyword parameters are applied to the cloned
        field after cloning, overriding attributes already present. Any field parameters which have
        a value that cannot be deep-copied are silently ignored."""

        if 'default' not in params:
            params['default'] = self.default

        for key, value in self.__dict__.items():
            if key not in params:
                try:
                    params[key] = deepcopy(value)
                except TypeError:
                    pass

        return type(self)(**params)

    @classmethod
    def construct(cls, **specification):
        """Constructs and returns an instance of this field type using the specified keyword
        parameters, which should be valid and sufficient parameters for this field type. Such
        a collection of parameters is typically obtained by calling ``.describe()``."""

        params = cls._construct_parameter(specification)
        return cls(**params)

    def describe(self, parameters=None, verbose=False, **params):
        """Constructs a serializable description of this field, expressed as a ``dict`` containing
        enough information to reconstruct this field in another context, though with some notable
        limitations. In particular, attributes of this field which have values that are not
        natively serializable are ignored. The description produced is suitable for clients,
        proxies, documentation, and so forth. If this field is structural, the description will be
        nested accordingly.

        :param dict parameters: Optional, default is ``None``; if specified, indicates additional
            field parameters which should be included in the description, including default values
            for when this instance does not have a value for the specified parameter.

        :param boolean verbose: Optional, default is ``False``; if ``True``, the description will
            contain all relevant parameters for this field and any nested fields, instead of only
            those with a non-default value.

        :param \*\*params: Additional keyword parameters, if specified, will be serialized and
            included in the description, overriding any values present.

        :returns: The serializable field description, as a possibly nested ``dict``.
        """

        description = {'fieldtype': self.type}
        for attr, value in self.aspects.items():
            if value is not None:
                try:
                    description[attr] = self._describe_parameter(value)
                except CannotDescribeError:
                    pass

        for source in (self.parameters, parameters):
            if not source:
                continue
            for parameter, default_value in source.items():
                if parameter not in params:
                    value = getattr(self, parameter, None)
                    if value is not None and (verbose or value is not default_value):
                        try:
                            description[parameter] = self._describe_parameter(value)
                        except CannotDescribeError:
                            pass

        for name, value in params.items():
            if verbose or value is not None:
                try:
                    description[name] = self._describe_parameter(value)
                except CannotDescribeError:
                    pass

        return description

    def extract(self, subject, strict=True, **params):
        """Attempts to extract a valid value for this field from ``subject``. If an ``extractor``
        has been specified for this field, it will be invoked with ``subject``, and its return
        value will be used as the extracted value. Otherwise, the default implementation is 
        simply to return ``subject``.

        :param subject: The candidate value for extraction; acceptable values will differ among
            implementing subclasses.

        :param boolean strict: Optional, default is ``True``; if ``False``, indicates generally
            that a wider range of acceptable ``subject`` s should be allowed. This parameter is
            intended to be used by particular subclass implementations, and its meaning will
            vary accordingly. The default implementation of ``extract()`` ignores it.

        :param \*\*params: Additional keyword parameters, if any, will be passed to ``screen()``
            to determine if this field should attempt extraction at all.

        :returns: The extracted value, which could be ``None``.

        :raises FieldExcludedError: when this field has been excluded, due to a failed screen()

        :raises CannotExtractError: when this field cannot extract a valid value from ``subject``
        """

        if params and not self.screen(**params):
            raise FieldExcludedError(self)

        if subject is not None and self.extractor:
            try:
                return self.extractor(self, subject)
            except Exception:
                raise CannotExtractError('extractor raised exception')
        else:
            return subject

    def filter(self, all=False, **params):
        """Filters this field."""

        if not params:
            return self

        included = False
        for attr, value in params.items():
            candidate = getattr(self, attr, None)
            if candidate is None:
                candidate = False
            if candidate == value:
                if all:
                    included = True
                else:
                    return self
            elif all:
                return None

        if included:
            return self

    def get(self, key, default=None):
        """Gets the child field of this field identified by ``key``, if this field is a structural
        field that has keyed child fields."""

        raise TypeError(self)

    def instantiate(self, value, key=None):
        """Attempts to instantiate ``value`` using the instantiator specified for this field. If
        ``value`` is ``None`` or this field does not specify an instantiator, ``value`` is returned
        as is. Otherwise, the return value of the instantiator is returned.

        :param value: The value to instantiate, which if not ``None`` should be a valid value
            for this field.

        :param key: Optional, default is ``None``; if specified, indicates the key value for
            ``value`` within a parent structure. This parameter is only specified in special
            circumstances.
        """

        if value is not None and self.instantiator:
            return self.instantiator(self, value, key)
        else:
            return value

    def interpolate(self, subject, parameters, interpolator=None):
        """Attempts to interpolate variables within ``subject`` using the specified
        ``parameters``."""

        equivalent = self.equivalent
        if subject is None or (equivalent and isinstance(subject, equivalent)):
            return subject
        else:
            return interpolate_parameters(subject, parameters, True, interpolator)

    def process(self, value, phase=INBOUND, serialized=False, ancestry=None):
        """Processes ``value`` as a candidate value for this field, serializing or unserializing
        if appropriate, validating it, then returning it.

        :param value: The candidate value to process.

        :param str phase: Optional, default is ``INBOUND``; should be either ``INBOUND`` or
            ``OUTBOUND``, which are constants defined by this module. Inbound values are
            unserialized before processing, while outbound values are serialized after
            processing.

        :param boolean serialized: Optional, default is ``False``; if ``True``, indicates that
            the value should either be unserialized before processing, if ``phase`` is ``INBOUND``,
            or serialized after processing, if ``phase`` if ``OUTBOUND``.

        :param ancestry: Optional, default is ``None``; this parameter is used internally
            during hierarchical processing and should not be directly specified.

        :returns: The processed value, which could be ``None``.

        :raises InvalidTypeError: when the type of ``value`` is not correct for this field

        :raises ValidationError: when the type of ``value`` is correct for this field, but
            validation failed

        :raises UndefinedFieldError: when a subfield of a structural field was left undefined
        """

        if not ancestry:
            ancestry = [self.guaranteed_name]

        if self._is_null(value, ancestry):
            return None

        if serialized and phase == INBOUND:
            value = self._unserialize_value(value, ancestry)

        if self.preprocessor:
            try:
                value = self.preprocessor(value)
            except Exception:
                raise InvalidTypeError(identity=ancestry, field=self,
                    value=value).construct('invalid').capture()

        if self.constant is not None and value != self.constant:
            raise InvalidTypeError(identity=ancestry, field=self, value=value).construct('invalid')

        candidate = self._validate_value(value, ancestry)
        if candidate is not None:
            value = candidate

        if serialized and phase == OUTBOUND:
            try:
                value = self._serialize_value(value)
            except OverflowError:
                raise ValidationError(identity=ancestry, field=self, value=value).construct('overflow')

        return value

    def read(self, path, format=None, **params):
        """Reads the content of the file at ``path``, unserializes it, then processes it as an
        inbound value for this field."""

        data = Format.read(path, format, self, **params)
        return self.process(data, INBOUND, True)

    def screen(self, **params):
        """Screens this field by comparing the specified keyword parameters to the attributes
        of this field, returning ``True`` when all match, ``False`` otherwise."""

        for attr, value in params.items():
            if value is not None:
                if getattr(self, attr, None) != value:
                    return False
        else:
            return True

    def serialize(self, value, format=None, ancestry=None, **params):
        """Processes ``value`` as an outbound value for this field, then, if ``format`` is
        specified, serializes the processed value to ``format``."""

        value = self.process(value, OUTBOUND, True, ancestry)
        if format:
            value = Format.formats[format].serialize(value, self, **params)
        return value

    def transform(self, transformer):
        """Invokes ``transformer`` with this field as the sole argument, then checks its return
        value. If a different Field instance, that value is immediately returned. If ``False``,
        this field is immediately returned."""

        candidate = transformer(self)
        if isinstance(candidate, Field):
            return candidate
        else:
            return self

    def unserialize(self, value, format=None, ancestry=None, **params):
        """Unserializes ``value`` from ``format``, if ``format`` is specified, before processing
        it as an inbound value for this field."""

        if format:
            value = Format.formats[format].unserialize(value, self, **params)
        return self.process(value, INBOUND, True, ancestry)

    @classmethod
    def visit(cls, specification, callback):
        """Invokes ``callback`` directly on ``specification``, which should be a field
        representation, as well as on all field representations nested therein.

        :param dict specification: A field representation, possibly containing nested field
            representations, such as that returned by :func:`.describe()`.
        """

        implementation = cls.types[specification['fieldtype']]
        return implementation._visit_field(specification, callback)

    def write(self, path, value, format=None, **params):
        """Processes ``value`` as an outbound value for this field, serializes it to ``format``,
        then writes the serialized version to ``path``."""

        value = self.process(value, OUTBOUND, True)
        Format.write(path, value, format, self, **params)

    @classmethod
    def _construct_parameter(cls, parameter):
        if isinstance(parameter, dict):
            if 'fieldtype' in parameter:
                return Field.reconstruct(parameter)
            else:
                return dict((k, cls._construct_parameter(v)) for k, v in parameter.items())
        elif isinstance(parameter, (list, tuple)):
            description = [cls._construct_parameter(item) for item in parameter]
            if isinstance(parameter, list):
                return description
            else:
                return tuple(description)
        else:
            return parameter

    def _describe_parameter(self, parameter):
        if isinstance(parameter, dict):
            return dict((k, self._describe_parameter(v)) for k, v in parameter.items())
        elif isinstance(parameter, (list, tuple)):
            description = [self._describe_parameter(item) for item in parameter]
            if isinstance(parameter, list):
                return description
            else:
                return tuple(description)
        elif isinstance(parameter, Field):
            return parameter.describe()
        elif isinstance(parameter, NATIVELY_SERIALIZABLE):
            return parameter
        else:
            raise CannotDescribeError(parameter)

    def _is_null(self, value, ancestry):
        if value is None:
            if self.nonnull:
                raise ValidationError(identity=ancestry, field=self).construct('nonnull')
            else:
                return True

    def _serialize_value(self, value):
        """Converts ``value`` to a natively serializable form, if necessary, and returns it. A
        suitable implementation of this method should be provided by subclasses which handle
        values that aren't natively serializable; the default implementation merely returns
        ``value``."""

        return value

    def _unserialize_value(self, value, ancestry):
        """Converts ``value`` to the proper form for this field, if necessary, and returns it;
        ``value`` should be in the form returned by ``._serialize_value()`, but this is not
        guaranteed. A suitable implementation of this method should be provided by subclasses
        which handle values that aren't natively serializable; the default implementation
        merely returns ``value``."""

        return value

    def _validate_value(self, value, ancestry):
        """Validates ``value`` accordingly to the constraints associated with this field, raising
        :exc:`ValidationError` is necessary, then returns it; ``value`` should be in the native
        form for this field (that is, unserialized), but this is not guaranteed. Most subclasses
        will provide a suitable implementation of this method; the default implementation merely
        returns ``value``.

        It is permissible to returned a modified version of ``value``, for example to render a
        canonical representation of the value. It is intended though that the return value, if
        deemed valid, is equivalent to ``value``.
        """

        return value

    @classmethod
    def _visit_field(cls, specification, callback):
        return {}

class Undefined(object):
    """A field placeholder which can be replaced with a valid field at a later time, intended
    in particular to support defining recursive structures.

    :param field: Optional, default is ``None``; if specified, a :class:`Field` instance to use
        instead of an undefined.
    """

    def __init__(self, field=None):
        self.callbacks = []
        self.field = field

    def define(self, field):
        self.field = field
        for callback, args in self.callbacks:
            callback(field, *args)

    def register(self, callback, *args):
        self.callbacks.append((callback, args))
