import re
from string import whitespace

from scheme.exceptions import *
from scheme.field import *
from scheme.fields.text import Text

__all__ = ('Email',)

EMAIL_EXPR = (
    r"([-!#$%&'*+/=?^_`{}|~0-9a-zA-Z]+(\.[-!#$%&'*+/=?^_`{}|~0-9a-zA-Z]+)*"
    r'|"([\001-\010\013\014\016-\037!#-\[\]-\177]|\\[\001-\011\013\014\016-\177])*"'
    r')@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}')

EMAIL_ADDRESS_EXPR = re.compile(r'^(%s)?$' % EMAIL_EXPR)
EXTENDED_EMAIL_ADDRESS_EXPR = re.compile(r'^(("[^"]+"[ ]+<%s>)|([^<]+[ ]+<%s>)|(%s))?$'
    % (EMAIL_EXPR, EMAIL_EXPR, EMAIL_EXPR))
EMAIL_LIST_EXPR = re.compile(r'^(%s(,%s)*)?$' % (EMAIL_EXPR, EMAIL_EXPR))

SEPARATOR_EXPR = re.compile(r'[\s,;:]+')
SEPARATORS = whitespace + ',;:'

class Email(Text):
    """A field for one or more email addresses."""

    single_errors = [FieldError('pattern', 'invalid value', '%(field)s must be a valid email address')]
    multiple_errors = [FieldError('pattern', 'invalid value', '%(field)s must be a list of valid email addresses')]
    parameters = {'extended': False, 'multiple': False, 'strip': False}

    def __init__(self, multiple=False, extended=False, pattern=None,
            strip=None, errors=None, **params):

        if multiple:
            errors = self.multiple_errors
            if not extended:
                pattern = EMAIL_LIST_EXPR
            else:
                raise ValueError("argument 'extended' cannot be True when argument"
                    " 'multiple' is True")
        else:
            errors = self.single_errors
            if extended:
                pattern = EXTENDED_EMAIL_ADDRESS_EXPR
            else:
                pattern = EMAIL_ADDRESS_EXPR

        super(Email, self).__init__(errors=errors, strip=False, pattern=pattern, **params)
        self.extended = extended
        self.multiple = multiple

    def __repr__(self):
        aspects = []
        if self.multiple:
            aspects.append('multiple=True')
        if self.extended:
            aspects.append('extended=True')
        return super(Email, self).__repr__(aspects)

    def preprocessor(self, value):
        if self.extended:
            return value

        value = value.strip(SEPARATORS).lower()
        if self.multiple:
            value = SEPARATOR_EXPR.sub(',', value)

        return value
