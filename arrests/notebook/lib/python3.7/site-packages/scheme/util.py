import re
import sys
from inspect import getmodule
from types import ModuleType

try:
    integers = (int, long)
except NameError:
    integers = (int,)

try:
    numbers = (float, int, long)
except NameError:
    numbers = (float, int)

try:
    string = basestring
except NameError:
    string = str

NODEFAULT = object()

def abbreviate_string(value, maxlength=0):
    maxlength = max(maxlength, 4)
    if len(value) <= maxlength:
        return value

    half = (maxlength - 3) / 2

    left = value[:half]
    while not left[-1].isalnum():
        left = left[:-1]

    right = value[-half:]
    while not right[0].isalnum():
        right = right[1:]

    return '%s...%s' % (left, right)

def getitem(obj, key, default=NODEFAULT):
    if default is not NODEFAULT:
        return obj.get(key, default)
    else:
        return obj[key]

def identify_object(obj, cache={}):
    if isinstance(obj, ModuleType):
        return obj.__name__
    elif isinstance(obj, object) and isinstance(obj, type):
        if obj.__module__ == '__main__':
            return obj.__name__
        return '%s.%s' % (obj.__module__, obj.__name__)

    try:
        return cache[obj]
    except KeyError:
        pass

    module = getmodule(obj)
    if not module:
        raise TypeError(obj)

    for attr, value in module.__dict__.items():
        if value is obj:
            identity = cache[obj] = '%s.%s' % (module.__name__, attr)
            return identity
    else:
        raise TypeError(obj)

def import_object(path):
    fullpath = path
    try:
        if ':' in path:
            path, attr = path.split(':')
            attrs = attr.split('.')
            target = __import__(path, None, None, [attrs[0]])
            for attr in attrs:
                target = getattr(target, attr)
            return target
        elif '.' in path:
            attrs = []
            while True:
                front, sep, back = path.rpartition('.')
                try:
                    target = __import__(path, None, None, [back])
                except ImportError as exception:
                    if str(exception).startswith('No module named'):
                        attrs.insert(0, back)
                        path = front
                    else:
                        raise
                else:
                    for attr in attrs:
                        target = getattr(target, attr)
                    return target

                if not path:
                    raise ImportError()
        else:
            return __import__(path, None, None, [])
    except ImportError:
        raise ImportError(fullpath)
    except Exception:
        raise ImportError(fullpath)

def indent(text, indent, indent_first=True):
    if isinstance(indent, int):
        indent = ' ' * indent

    lines = []
    candidates = text.split('\n')

    if not indent_first:
        lines.append(candidates.pop(0))

    for line in candidates:
        lines.append(indent + line)
    return '\n'.join(lines)

def minimize_string(value):
    return re.sub(r'\s+', ' ', value).strip(' ')

PLURALIZATION_RULES = (
    (re.compile(r'ife$'), re.compile(r'ife$'), 'ives'),
    (re.compile(r'eau$'), re.compile(r'eau$'), 'eaux'),
    (re.compile(r'lf$'), re.compile(r'lf$'), 'lves'),
    (re.compile(r'[sxz]$'), re.compile(r'$'), 'es'),
    (re.compile(r'[^aeioudgkprt]h$'), re.compile(r'$'), 'es'),
    (re.compile(r'(qu|[^aeiou])y$'), re.compile(r'y$'), 'ies'),
)

def pluralize(word, quantity=None, rules=PLURALIZATION_RULES):
    if quantity == 1: 
        return word

    for pattern, target, replacement in rules:
        if pattern.search(word):
            return target.sub(replacement, word)
    else:
        return word + 's'

def recursive_merge(original, addition):
    for key, value in addition.items():
        if key in original:
            source = original[key]
            if isinstance(source, dict) and isinstance(value, dict):
                value = recursive_merge(source, value)
        original[key] = value
    return original

class StructureFormatter(object):
    def __init__(self, abbreviate=False, masks=None, indent=4):
        self.abbreviate = abbreviate
        self.indent = ' ' * indent
        self.indent_count = indent
        self.masks = masks or []

    def format(self, structure, level=0):
        description = self._format_value(structure, level)
        if isinstance(description, list):
            description = '\n'.join(description)
        return description

    def _format_dict(self, value, level):
        inner_indent = self.indent * (level + 1)
        singles, multiples = [], []

        for k, v in sorted(value.items()):
            try:
                k = str(k)
            except Exception:
                pass
            if k in self.masks:
                description = '***MASKED***'
            else:
                description = self._format_value(v, level + 1)
            if isinstance(description, list):
                multiples.append('%s%r: %s' % (inner_indent, k, description[0]))
                multiples.extend(description[1:-1])
                multiples.append('%s%s,' % (inner_indent, description[-1]))
            else:
                singles.append('%s%r: %s,' % (inner_indent, k, description))

        return ['{'] + singles + multiples + ['}']

    def _format_list(self, value, level, tokens='[]'):
        inner_indent = self.indent * (level + 1)
        single_line = True

        lines = []
        for v in value:
            description = self._format_value(v, level + 1)
            if isinstance(description, list):
                single_line = False
                lines.append('%s%s' % (inner_indent, description[0]))
                lines.extend(description[1:-1])
                lines.append('%s%s,' % (inner_indent, description[-1]))
            else:
                lines.append('%s%s,' % (inner_indent, description))

        if single_line:
            single_line = tokens[0] + ', '.join(l.strip().rstrip(',') for l in lines) + tokens[1]
            if len(single_line) <= 60:
                return single_line

        return [tokens[0]] + lines + [tokens[1]]

    def _format_string(self, value, level):
        try:
            value = str(value)
        except Exception:
            pass

        if self.abbreviate:
            value = abbreviate_string(value)
        return repr(value)

    def _format_value(self, value, level):
        if isinstance(value, dict):
            return self._format_dict(value, level)
        elif isinstance(value, list):
            return self._format_list(value, level)
        elif isinstance(value, tuple):
            return self._format_list(value, level, '()')
        elif isinstance(value, string):
            return self._format_string(value, level)
        else:
            return repr(value)

def format_structure(structure, abbreviate=False, masks=None, indent=4, level=0):
    formatter = StructureFormatter(abbreviate, masks, indent)
    return formatter.format(structure, level)

def set_nested_value(subject, path, value):
    segments = path.split('.')
    last = segments.pop()

    for key in segments:
        if isinstance(subject, dict):
            if key in subject:
                subject = subject[key]
            else:
                raise KeyError(path)
        else:
            raise TypeError(subject)

    if not isinstance(subject, dict):
        raise TypeError(subject)

    subject[last] = value

def traverse_to_key(value, path):
    for key in path.split('.'):
        if isinstance(value, dict):
            if key in value:
                value = value[key]
            else:
                raise KeyError(path)
        else:
            raise TypeError(value)
    else:
        return value

def with_metaclass(metaclass):
    def decorator(cls):
        params = cls.__dict__.copy()
        params.pop('__dict__', None)
        params.pop('__weakref__', None)
        return metaclass(cls.__name__, cls.__bases__, params)
    return decorator
