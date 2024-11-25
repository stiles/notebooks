from datetime import date
import re

try:
    import jinja2
except ImportError:
    jinja2 = None

from scheme.exceptions import *
from scheme.timezone import current_timestamp
from scheme.util import string

__all__ = ('Interpolator', 'interpolate_parameters')

VARIABLE_EXPR = re.compile(r'^\s*[$][{]([^}]+)[}]\s*$')

class Interpolator(object):
    """The standard jinja-based interpolator."""

    default_interpolator = None
    standard_filters = []
    standard_globals = []

    def __init__(self, filters=None, globals=None):
        self.environment = jinja2.Environment(
            variable_start_string='${',
            variable_end_string='}')

        for filter in self.standard_filters:
            self.environment.filters[filter.__name__] = filter
        for function in self.standard_globals:
            self.environment.globals[function.__name__] = function

        if filters:
            self.environment.filters.update(filters)
        if globals:
            self.environment.globals.update(globals)

    @classmethod
    def default(cls):
        if cls.default_interpolator is None:
            cls.default_interpolator = cls()
        return cls.default_interpolator

    def evaluate(self, subject, parameters):
        expression = self.environment.compile_expression(subject, False)
        try:
            value = expression(**parameters)
            if isinstance(value, self.environment.undefined):
                raise UndefinedParameterError()
        except jinja2.UndefinedError:
            raise UndefinedParameterError()
        else:
            return value

    def interpolate(self, subject, parameters):
        template = self.environment.from_string(subject)
        return template.render(parameters)

def interpolate_parameters(subject, parameters, simple=False, interpolator=None):
    """Interpolates ``subject``, a template string, using ``parameters``. If ``subject`` is empty,
    an empty string is immediately returned.

    :param string subject: The template to interpolate.

    :param dict parameters: A ``dict`` of potential values for interpolating ``subject``.

    :param boolean simple: Optional, default is ``False``; if ``True``, indicates that subject
        should be treated as a single variable reference, rather then a full template.

    :param interpolator: Optional, default is ``None``; a :cls:`Interpolator` instance to use for
        interpolation, instead of the default one.
    """

    if not isinstance(subject, string):
        raise ValueError(subject)
    if not subject:
        return ''

    interpolator = interpolator or Interpolator.default()
    if not simple:
        return interpolator.interpolate(subject, parameters)

    match = VARIABLE_EXPR.match(subject)
    if match:
        expression = match.group(1).strip()
        return interpolator.evaluate(expression, parameters)
    else:
        return subject
