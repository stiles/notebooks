Scheme: Declarative Schema Framework
====================================

.. image:: https://badge.fury.io/py/scheme.svg
    :target: http://badge.fury.io/py/scheme

**Homepage:** `https://github.com/arterial-io/scheme <https://github.com/arterial-io/scheme>`_

Scheme is a declarative, general-purpose data schema framework for Python. It provides a simple approach to defining data schemas, and with those schemas enables serialization and unserialization to and from a variety of data formats, rich validation with descriptive error handling, hierarchical variable interpolation, and other interesting means of interacting with data.

Scheme can be used wherever incoming and outgoing structured data needs to be well-defined and validated: APIs, configuration files, complex user input, workflow and process user cases, and so on.

.. code-block:: python

    >>> from scheme import *
    >>> from datetime import date

    >>> account = Structure({
            'name': Text(nonempty=True),
            'email': Email(nonempty=True),
            'role': Enumeration('guest user admin', required=True, default='user'),
            'active': Boolean(required=True, default=True),
            'interests': Sequence(Text(nonempty=True), unique=True),
            'logins': Integer(minimum=0, default=0),
            'birthday': Date(),
        }, name='account')

    >>> json = '{"name": "Johnny Doe", "email": "johnny.doe@something.com",
            "interests": ["baseball", "basketball"], "birthday": "1980-03-05"}'

    >>> account.unserialize(json, 'json')
    {'name': 'Johnny Doe', 'email': 'johnny.doe@something.com', 'role': 'user',
        'active': True, 'interests': ['baseball', 'basketball'], 'logins': 0,
        'birthday': datetime.date(1980, 3, 5)}

    >>> suzy = {'name': 'Suzy Queue', 'email': 'suzy.queue@something.com',
            'role': 'admin', 'active': False, 'logins': 324,
            'birthday': date(1985, 12, 2)}

    >>> print(account.serialize(suzy, 'yaml'))
    active: false
    birthday: 1985-12-02
    email: suzy.queue@something.com
    logins: 324
    name: Suzy Queue
    role: admin

    >>> account.unserialize('{}', 'json')     
    Traceback (most recent call last):
      ...
    scheme.exceptions.ValidationError: validation failed
    [01] Required field error at (structure): account is missing required field 'name'
         Field: Structure(name='account', ...)
    [02] Required field error at (structure): account is missing required field 'email'
         Field: Structure(name='account', ...)

    >>> account.serialize({'name': 'Johnny Doe', 'email': 'johnny.doe@something.com',
            'logins': -34}, 'json')
    Traceback (most recent call last):
      ...
    scheme.exceptions.ValidationError: validation failed
    [01] Required field error at (structure): account is missing required field 'active'
         Field: Structure(name='account', ...)
    [02] Minimum value error at (structure).logins: logins must be greater then or equal to 0
         Field: Integer(name='logins', minimum=0, default=0)
         Value: -34
    [03] Invalid value error at (structure).role: role must be one of 'guest', 'user', 'admin'
         Field: Enumeration(name='role', ...)
         Value: 'invalid'

Features
--------

- Simple, declarative schema definition
- Rich set of field types: *binary, boolean, date, datetime, decimal, email, enumeration, float integer, map, object, sequence, structure, text, time, token, tuple, uuid*
- Support for various serialization formats: *csv, json, structured text, xml, yaml*
- Rich validation with descriptive error reporting: *minimum/maximum length/value, pattern matching, etc.*
- Hierarchical variable interpolation
- Schema-mediated extraction of values from arbitrary objects
- Support for schema-based objects
- Serialization and unserialization of schemas, for dynamic use cases

Get it
------
::

    $ pip install -U scheme

Requirements
------------

Python 2.6+ or 3.3+

License
-------

BSD licensed. See `LICENSE <https://github.com/arterial-io/scheme/blob/master/LICENSE>`_ for more details.


