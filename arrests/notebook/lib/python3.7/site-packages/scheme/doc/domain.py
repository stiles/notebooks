import re

from docutils import nodes
from docutils.parsers.rst import directives

from sphinx import addnodes
from sphinx.roles import XRefRole
from sphinx.directives import ObjectDescription
from sphinx.domains import Domain, Index, ObjType
from sphinx.util.compat import Directive
from sphinx.util.nodes import make_refnode
from sphinx.util.docfields import Field, GroupedField, TypedField

from scheme.util import string

def container(*classes):
    node = nodes.container()
    node['classes'].extend(classes)
    return node

def emphasis(text, *classes):
    node = nodes.emphasis(text, text)
    node['classes'].extend(classes)
    return node

def fieldlist(fields, *classes):
    node = nodes.field_list('')
    node['classes'].extend(classes)
    for name, value in fields:
        node += nodes.field('',
            nodes.field_name('', name),
            nodes.field_body('', nodes.paragraph('', value)),
        )
    return node

def inline(text, *classes):
    node = nodes.inline(text, text)
    node['classes'].extend(classes)
    return node

def literal(text, *classes):
    node = nodes.literal(text, text)
    node['classes'].extend(classes)
    return node

def paragraph(*classes):
    node = nodes.paragraph()
    node['classes'].extend(classes)
    return node

def section(id, title):
    node = nodes.section('', nodes.title('', title))
    node['ids'].append(id)
    return node

def strong(text, *classes):
    node = nodes.strong(text, text)
    node['classes'].extend(classes)
    return node

def text(text):
    return nodes.Text(text)

def aspect_block(name, value, element=text):
    block = paragraph('field-aspect')
    block += inline('%s: ' % name, 'aspect-name')
    block += element(value)
    return block

def format_value(value):
    if isinstance(value, string):
        if value.lower() in ('true', 'false'):
            return value.lower()
        for datatype in (float, int):
            try:
                datatype(value)
                return value
            except Exception:
                pass
        return repr(value)
    else:
        return str(value)

class FieldDefinition(Directive):
    has_content = True
    required_arguments = 0
    optional_arguments = 1
    final_argument_whitespace = True
    option_spec = {
        'constant': directives.unchanged,
        'constraints': directives.unchanged,
        'default': directives.unchanged,
        'description': directives.unchanged,
        'example': directives.unchanged,
        'ignore_null': directives.flag,
        'key': directives.unchanged,
        'nonnull': directives.flag,
        'pattern': directives.unchanged,
        'polymorphic': directives.flag,
        'polymorphic_discriminator': directives.flag,
        'required': directives.flag,
        'required_keys': directives.unchanged,
        'sectional': directives.flag,
        'subtype': directives.unchanged,
        'title': directives.unchanged,
        'type': directives.unchanged,
        'unique': directives.flag,
        'values': directives.unchanged,
    }

    flags = ('required', 'nonnull', 'ignore_null', 'polymorphic', 'unique')

    aspects = {
        'pattern': literal,
        'values': literal,
        'required_keys': literal,
    }

    def run(self):
        sectional = ''
        if 'sectional' in self.options:
            sectional = 'sectional'

        definition = container('field', sectional)
        signature = nodes.paragraph('', '', classes=['field-signature'])

        if len(self.arguments) == 1:
            field = self.arguments[0]
        else:
            field = None

        if field:
            required = ''
            if 'required' in self.options:
                required = 'required'

            polymorphic_discriminator = ''
            if 'polymorphic_discriminator' in self.options:
                polymorphic_discriminator = 'polymorphic_discriminator'

            separator = ':'
            if polymorphic_discriminator:
                separator = ''
            elif ' ' not in field:
                try:
                    int(field)
                except ValueError:
                    pass
                else:
                    separator = '.'

            signature += strong(field + separator, 'field-name',
                required, sectional, polymorphic_discriminator)

        type = self.options.get('type')
        if type:
            signature += text(' ')
            signature += emphasis(type, 'field-type')

        subtype = self.options.get('subtype')
        if subtype:
            span = inline('<', 'field-subtype')
            aspects = None

            if ';' in subtype:
                subtype, aspects = subtype.split(';', 1)

            span += emphasis(subtype, 'field-type')
            if aspects:
                span += text(' ')
                span += inline(aspects, 'field-flags')

            span += text('>')
            signature += text(' ')
            signature += span

        key = self.options.get('key')
        if key:
            signature += text(' ')
            signature += literal('key=%s' % key, 'field-constraints')

        constant = self.options.get('constant')
        if constant:
            signature += text(' ')
            signature += literal('constant=%s' % constant, 'field-default')

        default = self.options.get('default')
        if default and not constant:
            signature += text(' ')
            signature += literal('default=%s' % default, 'field-default')

        constraints = self.options.get('constraints')
        if constraints:
            signature += text(' ')
            signature += literal('%s' % constraints, 'field-constraints')

        flags = []
        for flag in self.flags:
            if flag in self.options:
                flags.append(flag)

        if flags:
            signature += text(' ')
            signature += inline(' '.join(flags), 'field-flags')

        title = self.options.get('title')
        if title:
            signature += text(' ')
            signature += inline('"%s"' % title, 'field-title')

        definition += signature
        block = nodes.block_quote('')

        description = self.options.get('description')
        if description:
            block += inline(description, 'field-description')

        for aspect, element in self.aspects.items():
            value = self.options.get(aspect)
            if value:
                block += aspect_block(aspect, value, element)

        self.state.nested_parse(self.content, self.content_offset, block)
        if block.children:
            definition += block

        return [definition]

class StructureDefinition(Directive):
    has_content = True
    required_arguments = 1
    optional_arguments = 0
    final_argument_whitespace = True

    def run(self):
        block = nodes.block_quote('', classes=['structure-block'])
        self.state.nested_parse(self.content, self.content_offset, block)

        header = nodes.paragraph('', '', strong(self.arguments[0]), classes=['structure-header'])
        if block.children:
            return [header, block]
        else:
            return [header]
