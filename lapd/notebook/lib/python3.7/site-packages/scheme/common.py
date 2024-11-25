from scheme.fields import *

__all__ = ('Errors',)

Errors = Tuple((
    Sequence(Map(Text(nonnull=True), description='A mapping describing an error.'),
        description='A sequence of top-level errors.'),
    Field(description='A structure containing structural errors.'),
), description='A two-tuple containing top-level and structural errors.')
