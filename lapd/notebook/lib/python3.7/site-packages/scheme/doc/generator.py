import os
import textwrap
from datetime import date, datetime, time

from scheme import *
from scheme.util import numbers, string

__all__ = ('DocumentationGenerator', 'directive')

class directive(object):
    def __init__(self, directive, *args):
        self.args = list(args)
        self.content = []
        self.directive = directive
        self.params = []

    def add(self, arg):
        self.args.append(arg)
        return self

    def append(self, item):
        self.content.append(item)
        return self

    def extend(self, items):
        self.content.extend(items)
        return self

    def set(self, name, value):
        self.params.append((name, value))
        return self

    def render(self, indent=0):
        inner_indent = indent + 1
        inner_prefix = '    ' * inner_indent

        content = []
        for node in self.content:
            if isinstance(node, directive):
                content.append(node.render(inner_indent))
            elif isinstance(node, string):
                node = node.lstrip()
                content.append('\n'.join(textwrap.wrap(node, 80, expand_tabs=False,
                    initial_indent=inner_prefix, subsequent_indent=inner_prefix)))

        params = []
        for name, value in self.params:
            value = str(value)
            if '\n' in value:
                values = value.split('\n')
                value = '\n'.join([values[0]] + ['%s    %s' % (inner_prefix, v) for v in values[1:]])
            params.append('%s:%s: %s' % (inner_prefix, name, value))

        return '\n%s.. %s:: %s\n%s\n\n%s' % (
            '    ' * indent,
            self.directive,
            ' '.join(str(arg) for arg in self.args),
            '\n'.join(params),
            '\n\n'.join(content),
        )

class DocumentationGenerator(object):

    flag_attrs = {
        'nonnull': [],
        'ignore_null': [],
        'required': ['schema'],
    }

    def _describe_date(self, field, block, role):
        constraints = []
        if isinstance(field.get('minimum'), date):
            constraints.append('min=%s' % field['minimum'])
        if isinstance(field.get('maximum'), date):
            constraints.append('max=%s' % field['maximum'])
        if constraints:
            block.set('constraints', ', '.join(constraints))

    def _describe_datetime(self, field, block, role):
        constraints = []
        if isinstance(field.get('minimum'), datetime):
            constraints.append('min=%s' % field['minimum'])
        if isinstance(field.get('maximum'), datetime):
            constraints.append('max=%s' % field['maximum'])
        if field.get('utc', False):
            constraints.append('utc=True')
        if constraints:
            block.set('constraints', ', '.join(constraints))

    def _describe_decimal(self, field, block, role):
        constraints = []
        if field.get('minimum') is not None:
            constraints.append('min=%r' % field['minimum'])
        if field.get('maximum') is not None:
            constraints.append('min=%r' % field['maximum'])
        if constraints:
            block.set('constraints', ', '.join(constraints))

    def _describe_enumeration(self, field, block, role):
        if field.get('constant') is None:
            block.set('values', ' '.join(sorted(field['enumeration'])))

    def _describe_float(self, field, block, role):
        constraints = []
        if field.get('minimum') is not None:
            constraints.append('min=%r' % field['minimum'])
        if field.get('maximum') is not None:
            constraints.append('max=%r' % field['maximum'])
        if constraints:
            block.set('constraints', ' '.join(constraints))

    def _describe_integer(self, field, block, role):
        constraints = []
        if field.get('minimum') is not None:
            constraints.append('min=%r' % field['minimum'])
        if field.get('maximum') is not None:
            constraints.append('max=%r' % field['maximum'])
        if constraints:
            block.set('constraints', ', '.join(constraints))

    def _describe_map(self, field, block, role):
        if field.get('required_keys'):
            block.set('required_keys', repr(sorted(field['required_keys'])))

        key = field.get('key')
        if key:
            key = key['fieldtype']
        else:
            key = 'text'

        value = field['value']
        if value.get('structural', False) or value.get('description'):
            block.append(self._document_field('', value, role, key=key))
        else:
            block.set('subtype', '%s: %s' % (key, value['fieldtype']))

    def _describe_sequence(self, field, block, role):
        constraints = []
        if field.get('unique'):
            block.set('unique', '')
        if field.get('min_length') is not None:
            constraints.append('min=%d' % field['min_length'])
        if field.get('max_length') is not None:
            constraints.append('max=%d' % field['max_length'])
        if constraints:
            block.set('constraints', ', '.join(constraints))

        item = field.get('item')
        block.append(self._document_field('', item, role))

    def _describe_structure(self, field, block, role):
        structure = field.get('structure')
        if structure:
            polymorphic_on = field.get('polymorphic_on')
            if polymorphic_on:
                block.set('polymorphic', '')
                field_name = polymorphic_on['name']
                for value, substructure in sorted(structure.items()):
                    subblock = directive('field', '%s=%r' % (field_name, value))
                    subblock.set('polymorphic_discriminator', '')
                    for name, subfield in self._collate_fields(substructure, ('type',)):
                        subblock.append(self._document_field(name, subfield, role))
                    block.append(subblock)
            else:
                for name, subfield in self._collate_fields(structure):
                    block.append(self._document_field(name, subfield, role))

    def _describe_text(self, field, block, role):
        constraints = []
        if isinstance(field.get('min_length'), numbers):
            constraints.append('min_length=%r' % field['min_length'])
        if isinstance(field.get('max_length'), numbers):
            constraints.append('max_length=%r' % field['max_length'])
        if not field.get('strip', True):
            constraints.append('strip=false')
        if constraints:
            block.set('constraints', ', '.join(constraints))
        if field.get('pattern'):
            block.set('pattern', field['pattern'])

    def _describe_time(self, field, block, role):
        constraints = []
        if isinstance(field.get('minimum'), time):
            constraints.append('min=%s' % field['minimum'])
        if isinstance(field.get('maximum'), time):
            constraints.append('max=%s' % field['maximum'])
        if constraints:
            block.set('constraints', ', '.join(constraints))

    def _describe_tuple(self, field, block, role):
        values = field.get('values')
        if values:
            for i, value in enumerate(values):
                block.append(self._document_field('', value, role))

    def _describe_union(self, field, block, role):
        fields = field.get('fields')
        if fields:
            for i, subfield in enumerat,e(fields):
                block.append(self._document_field('', subfield, role))

    def _document_field(self, name, field, role=None, sectional=False, key=None):
        block = directive('field', name)
        if sectional:
            block.set('sectional', '')

        type = field['fieldtype']
        if key:
            type = '%s: %s' % (key, type)

        block.set('type', type)

        for attr in ('description', 'notes'):
            value = field.get(attr)
            if value:
                block.set(attr, value)

        for attr, ignore_in_roles in self.flag_attrs.items():
            if field.get(attr) and role not in ignore_in_roles:
                block.set(attr, '')

        constant = field.get('constant')
        if constant is not None:
            block.set('constant', repr(constant))

        default = field.get('default')
        if default is not None:
            block.set('default', repr(default))

        title = field.get('title')
        if title is not None:
            block.set('title', title)

        formatter = getattr(self, '_describe_%s' % field['fieldtype'], None)
        if formatter:
            formatter(field, block, role)

        return block


