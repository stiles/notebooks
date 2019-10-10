try:
    from urllib.parse import urlencode
except ImportError:
    from urllib import urlencode

try:
    from urlparse import parse_qsl
except ImportError:
    from cgi import parse_qsl

from scheme.formats.structuredtext import StructuredText
from scheme.util import string

__all__ = ('UrlEncoded',)

class UrlEncoded(StructuredText):
    mimetype = 'application/x-www-form-urlencoded'
    name = 'urlencoded'

    @classmethod
    def serialize(cls, content):
        if not isinstance(content, dict):
            raise ValueError(content)

        data = []
        for name, value in content.items():
            data.append((name, cls._serialize_content(value)))

        return urlencode(data)

    @classmethod
    def unserialize(cls, content):
        if not isinstance(content, string):
            raise ValueError(content)

        data = {}
        for name, value in parse_qsl(content):
            if value[0] in ('{', '['):
                value = cls._unserialize_structured_value(value)
            else:
                value = cls._unserialize_simple_value(value)
            data[name] = value

        return data
