from __future__ import absolute_import

from csv import QUOTE_ALL, Dialect, reader as Reader, writer as Writer

try:
    from cStringIO import StringIO
except ImportError:
    from io import StringIO

from scheme.fields import Sequence, Structure
from scheme.format import Format
from scheme.util import string, traverse_to_key

__all__ = ('Csv',)

class Csv(Format):
    extensions = ['.csv']
    mimetype = 'application/csv'
    name = 'csv'

    class Dialect(Dialect):
        delimiter = ','
        doublequote = True
        escapechar = None
        lineterminator = '\r\n'
        quotechar = '"'
        quoting = QUOTE_ALL
        skipinitialspace = False
        strict = False

    @classmethod
    def serialize(cls, value, schema, columns=None, path=None):
        if path:
            for key in path.split('.'):
                schema = schema.get(key)
                if schema and key in value:
                    value = value[key]
                else:
                    raise ValueError(path)

        if not isinstance(value, (list, tuple)):
            raise ValueError(value)
        if not isinstance(schema, Sequence):
            raise ValueError(schema)

        structure = schema.item
        if not isinstance(structure, Structure):
            raise ValueError(structure)

        if isinstance(columns, string):
            columns = columns.split(',')
        if not columns:
            columns = sorted(structure.structure.keys())

        cells = []
        for column in columns:
            field = structure.get(column)
            if field and not field.structural:
                cells.append((column, field))

        content = StringIO()
        writer = Writer(content, cls.Dialect)

        writer.writerow([cell[0] for cell in cells])
        for item in value:
            row = []
            for column, field in cells:
                candidate = item.get(column)
                if candidate is None:
                    row.append('')
                elif field.type == 'boolean':
                    if candidate:
                        row.append('true')
                    else:
                        row.append('false')
                else:
                    row.append(str(candidate))
            else:
                writer.writerow(row)

        return content.getvalue()

    @classmethod
    def unserialize(cls, value, schema):
        if not isinstance(schema, Sequence):
            raise TypeError(schema)

        structure = schema.item
        if not isinstance(structure, Structure):
            raise TypeError(structure)

        reader = Reader(value.strip('\r\n').split('\r\n'), cls.Dialect)
        columns = next(reader)

        cells = []
        for i, column in enumerate(columns):
            field = structure.get(column)
            if field and not field.structural:
                if field.type == 'boolean':
                    cells.append((i, column, lambda v: (v == 'true')))
                elif field.type == 'float':
                    cells.append((i, column, float))
                elif field.type == 'integer':
                    cells.append((i, column, int))
                else:
                    cells.append((i, column, None))
            else:
                raise ValueError()

        content = []
        for row in reader:
            candidate = {}
            for i, column, converter in cells:
                value = row[i]
                if value:
                    print(value)
                    if converter:
                        candidate[column] = converter(value)
                    else:
                        candidate[column] = value
            else:
                content.append(candidate)
        else:
            return content
