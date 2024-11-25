from copy import deepcopy

import scheme
from scheme.util import identify_object, import_object, string

__all__ = ('surrogate',)

class SurrogateMeta(type):
    def __new__(metatype, name, bases, namespace):
        cls = type.__new__(metatype, name, bases, namespace)
        cls.surrogate = identify_object(cls)
        return cls

class surrogate(dict):
    """A schema-based object surrogate.

    A surrogate is a concise, abbreviated representation of an object, intended for use cases in
    which a simple identifier is not sufficient, but the full object itself cannot be used.

    :param dict value: The aspects for this surrogate instance.

    :param schema: Optional, default is ``None``; a :class:`Structure` instance providing the
        dynamic schema for this surrogate instance.

    :param integer version: Optional, default is ``None``; the schema version of this surrogate.
    """

    __metaclass__ = SurrogateMeta
    cache = {}
    schemas = None

    def __init__(self, value, schema=None, version=None):
        super(surrogate, self).__init__(value)
        self.schema = schema
        self.version = version

    def __repr__(self):
        return '%s(%s)' % (self.surrogate, super(surrogate, self).__repr__())

    @classmethod
    def acquire(cls, impl, version=None, **params):
        if isinstance(impl, string):
            impl = cls._get_implementation(impl)
        if not impl.schemas:
            raise ValueError(impl)
        if version is None:
            version = len(impl.schemas)

        value = impl._acquire_surrogate(version, **params)
        if isinstance(value, cls):
            return value
        else:
            return cls.construct(impl, value, version=version)

    @classmethod
    def construct(cls, impl=None, value=None, schema=None, version=None, **params):
        """Constructs a surrogate instance from ``value``.

        :param impl: Optional, default is ``None``; 
        """

        if impl is None:
            impl = cls
        if isinstance(impl, string):
            impl = cls._get_implementation(impl)

        effective_schema = schema
        if effective_schema:
            if impl.schemas:
                raise Exception('cannot specify dynamic schema for surrogate with inherent schema')
        elif impl.schemas:
            if version is None:
                version = len(impl.schemas)
            try:
                effective_schema = impl.schemas[version - 1]
            except IndexError:
                raise Exception('invalid surrogate version')

        if value is not None:
            if isinstance(value, dict):
                value = dict(value)
                if effective_schema:
                    value = effective_schema.extract(value)
            elif effective_schema:
                value = effective_schema.extract(value, strict=False)
            else:
                raise ValueError(value)
            if params:
                value.update(params)
        elif params:
            value = params
        else:
            raise ValueError(value)

        impl.contribute(value, version)
        return impl(value, schema, version)

    @classmethod
    def contribute(cls, value, version):
        pass

    @classmethod
    def interpolate(cls, value, parameters, interpolator=None):
        value = dict(value)
        impl = cls._get_implementation(value.pop('_', None))

        if '__schema__' in value:
            return impl._interpolate_dynamic_surrogate(value, parameters, interpolator)
        elif impl.schemas:
            return impl._interpolate_versioned_surrogate(value, parameters, interpolator)
        else:
            raise ValueError(value)

    def serialize(self):
        """Serializes this surrogate."""

        value = dict(self)
        if self.schema:
            value = self.schema.serialize(value)
            value['__schema__'] = self.schema.describe()
        elif self.schemas:
            value = self.schemas[self.version - 1].serialize(value)
            if self.version > 1:
                value['__version__'] = self.version

        value['_'] = self.surrogate
        return value

    @classmethod
    def unserialize(cls, value, ancestry=None):
        value = dict(value)
        impl = cls._get_implementation(value.pop('_', None))

        if '__schema__' in value:
            return impl._unserialize_dynamic_surrogate(value, ancestry)
        elif impl.schemas:
            return impl._unserialize_versioned_surrogate(value, ancestry)
        else:
            return impl(value)

    @classmethod
    def _acquire_surrogate(cls, version, **params):
        raise NotImplementedError()

    @classmethod
    def _get_implementation(cls, token):
        if token is None:
            return surrogate
        elif token in cls.cache:
            return cls.cache[token]

        try:
            impl = import_object(token)
        except ImportError:
            impl = surrogate

        cls.cache[token] = impl
        return impl

    @classmethod
    def _interpolate_dynamic_surrogate(cls, value, parameters, interpolator):
        schema = scheme.Field.reconstruct(deepcopy(value.pop('__schema__')))
        if not schema:
            raise ValueError(value)

        value = schema.interpolate(value, parameters, interpolator)
        cls.contribute(value, None)
        return cls(value, schema)

    @classmethod
    def _interpolate_versioned_surrogate(cls, value, parameters, interpolator):
        version = value.pop('__version__', None)
        if version is None:
            version = len(cls.schemas)

        try:
            schema = cls.schemas[version - 1]
        except IndexError:
            raise ValueError(value)

        value = schema.interpolate(value, parameters, interpolator)
        cls.contribute(value, version)
        return cls(value, version=version)

    @classmethod
    def _unserialize_dynamic_surrogate(cls, value, ancestry=None):
        schema = value.pop('__schema__', None)
        if not schema:
            raise ValueError(value)

        schema = scheme.Field.reconstruct(schema)
        if not schema:
            raise ValueError(value)

        value = schema.unserialize(value, ancestry=ancestry)
        return cls(value, schema)

    @classmethod
    def _unserialize_versioned_surrogate(cls, value, ancestry=None):
        version = value.pop('__version__', 1)
        try:
            schema = cls.schemas[version - 1]
        except IndexError:
            raise ValueError(value)

        value = schema.unserialize(value, ancestry=ancestry)
        return cls(value, version=version)
