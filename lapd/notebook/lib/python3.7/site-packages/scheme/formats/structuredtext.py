import re

from scheme.format import Format
from scheme.util import string

__all__ = ('StructuredText',)

class StructuredText(Format):
    mimetype = 'text/plain'
    name = 'structuredtext'

    STRUCTURE_EXPR = re.compile(
        r'(?:\{((\\[\\\[\]\{\}])|[^\\{\[\]])*?\})|(?:\[((\\[\\\[\]\{\}])|[^\\{}\[])*?\])'
    )
    STRUCTURE_TOKENS_EXPR = re.compile(r'([{}\[\]])')
    ESCAPED_TOKENS_EXPR = re.compile(r'\\([{}\[\]])')

    @classmethod
    def serialize(cls, value, schema=None):
        return cls._serialize_content(value)

    @classmethod
    def unserialize(cls, value, schema=None, parse_numbers=False):
        if not isinstance(value, string):
            raise ValueError(value)
        if value[0] in ('{', '['):
            return cls._unserialize_structured_value(value, parse_numbers)
        else:
            return cls._unserialize_simple_value(value, parse_numbers)

    @classmethod
    def _serialize_content(cls, content):
        if isinstance(content, dict):
            tokens = []
            for key, value in sorted(content.items()):
                tokens.append('%s:%s' % (key, cls._serialize_content(value)))
            return '{%s}' % ','.join(tokens)
        elif isinstance(content, (list, tuple)):
            tokens = []
            for value in content:
                tokens.append(cls._serialize_content(value))
            return '[%s]' % ','.join(tokens)
        elif isinstance(content, bool):
            return content and 'true' or 'false'
        elif content is None:
            return 'null'
        elif isinstance(content, string):
            return cls.STRUCTURE_TOKENS_EXPR.sub(r'\\\1', content)
        else:
            return str(content)

    @classmethod
    def _unserialize_structure(cls, text, structures, parse_numbers=False):
        if text[0] == '{':
            tokens = text[1:-1]
            if tokens:
                pairs = []
                for pair in tokens.split(','):
                    key, value = pair.split(':', 1)
                    try:
                        if value in structures:
                            value = structures[value]
                        else:
                            value = cls._unserialize_simple_value(value, parse_numbers)
                        pairs.append((key, value))
                    except Exception:
                        raise ValueError(value)

                return dict(pairs)
            else:
                return {}
        else:
            tokens = text[1:-1]
            if tokens:
                values = []
                for value in tokens.split(','):
                    if value in structures:
                        value = structures[value]
                    else:
                        value = cls._unserialize_simple_value(value, parse_numbers)
                    values.append(value)
                return values
            else:
                return []

    @classmethod
    def _unserialize_structured_value(cls, text, parse_numbers=False):
        expr = cls.STRUCTURE_EXPR
        structures = {}

        def replace(match):
            token = '||%d||' % len(structures)
            structures[token] = cls._unserialize_structure(match.group(0),
                structures, parse_numbers)
            return token

        while True:
            text, count = expr.subn(replace, text)
            if count == 0:
                return structures[text]

    @classmethod
    def _unserialize_simple_value(cls, value, parse_numbers=False):
        candidate = value.lower()
        if candidate == 'true':
            return True
        elif candidate == 'false':
            return False
        elif candidate == 'null':
            return None
        elif not parse_numbers:
            return cls.ESCAPED_TOKENS_EXPR.sub(r'\1', value)

        if '.' in value:
            try:
                return float(value)
            except (TypeError, ValueError):
                pass

        try:
            return int(value)
        except (TypeError, ValueError):
            return value
