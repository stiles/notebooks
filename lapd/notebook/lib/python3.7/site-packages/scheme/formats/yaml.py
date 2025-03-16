from __future__ import absolute_import

import re
from datetime import date, datetime
from textwrap import TextWrapper

try:
    from collections import OrderedDict
except ImportError:
    class OrderedDict(object):
        pass

try:
    import yaml
except ImportError:
    yaml = None

from scheme.format import *
from scheme.util import string

__all__ = ('Yaml',)

class Yaml(Format):
    extensions = ['.yaml', '.yml']
    indent = '  '
    indicators = '-?:,[]{}#&*!|>\'"%@`'
    line_width = 100
    mimetype = 'application/x-yaml'
    name = 'yaml'
    requires_escape = (': ', ' #')
    requires_quotes = ('null', '~', 'true', 'false')
    whitespace = re.compile(r'^\s*$')

    @classmethod
    def serialize(cls, value, schema=None):
        content = cls._serialize_value(value, 0)
        if isinstance(content, list):
            content = '\n'.join(content)
        return content

    @classmethod
    def unserialize(cls, value, schema=None):
        return yaml.load(value)

    @classmethod
    def _is_literal_text(cls, value):
        if '\n' not in value:
            return False

        whitespace = cls.whitespace
        for line in value.split('\n'):
            if not line or whitespace.match(line):
                continue
            if line[0] in ' \t\v\f':
                return True
        else:
            return False

    @classmethod
    def _is_simple_sequence(cls, value):
        for item in value:
            if not (item is None or isinstance(item, (bool, float, int))):
                return False
        else:
            return True

    @classmethod
    def _requires_escaping(cls, value):
        if value[0] in cls.indicators:
            return True

        for token in cls.requires_escape:
            if token in value:
                return True
        else:
            return False

    @classmethod
    def _serialize_sequence(cls, value, level):
        if not value:
            return '[]'

        if cls._is_simple_sequence(value):
            return '[%s]' % ', '.join(cls._serialize_value(v, None) for v in value)

        prefix = (cls.indent * level) + '-'
        lines = []

        for v in value:
            content = cls._serialize_value(v, level + 1)
            if isinstance(content, list):
                lines.append('%s %s' % (prefix, content[0].lstrip()))
                lines.extend(content[1:])
            else:
                lines.append('%s %s' % (prefix, content))
        
        return lines

    @classmethod
    def _serialize_structure(cls, value, level):
        if not value:
            return '{}'

        if isinstance(value, OrderedDict):
            items = value.items()
        else:
            items = sorted(value.items())

        lines = []
        for k, v in items:
            key = '%s%s:' % (cls.indent * level, k)
            if isinstance(v, string):
                content = cls._serialize_string(v, level + 1)
                if isinstance(content, list):
                    lines.append('%s %s' % (key, content[0].lstrip()))
                    lines.extend(content[1:])
                else:
                    lines.append('%s %s' % (key, content))
            else:
                content = cls._serialize_value(v, level + 1)
                if isinstance(content, list):
                    lines.append(key)
                    lines.extend(content)
                else:
                    lines.append('%s %s' % (key, content))

        return lines

    @classmethod
    def _serialize_string(cls, value, level):
        length = len(value)
        if length == 0:
            return "''"
        elif length <= 5 and value.lower() in cls.requires_quotes:
            return "'%s'" % value

        indent = cls.indent * level
        if '\n' in value:
            lines = ['|']
            for line in value.split('\n'):
                if line:
                    lines.append(indent + line)
                else:
                    lines.append('')
            return lines
        elif length + len(indent) <= cls.line_width:
            if cls._requires_escaping(value):
                return "'%s'" % value.replace("'", "''")
            else:
                return value
        else:
            if cls._requires_escaping(value):
                value = "'%s'" % value.replace("'", "''")

            wrapper = TextWrapper(width=cls.line_width, initial_indent=indent,
                subsequent_indent=indent, break_long_words=False,
                replace_whitespace=False, drop_whitespace=False)

            lines = []
            for line in value.splitlines():
                lines.extend(wrapper.wrap(line))
            return lines

    @classmethod
    def _serialize_value(cls, value, level):
        if value is None:
            return 'null'
        elif isinstance(value, (OrderedDict, dict)):
            return cls._serialize_structure(value, level)
        elif isinstance(value, (list, set, tuple)):
            return cls._serialize_sequence(value, level)
        elif isinstance(value, string):
            return cls._serialize_string(value, level)
        elif isinstance(value, bool):
            if value:
                return 'true'
            else:
                return 'false'
        elif isinstance(value, datetime):
            return value.strftime('%Y-%m-%d %H:%M:%S')
        elif isinstance(value, date):
            return value.strftime('%Y-%m-%d')
        elif isinstance(value, (float, int)):
            return str(value)
        else:
            raise ValueError(value)
