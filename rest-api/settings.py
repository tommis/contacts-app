# -*- coding: utf-8 -*-
"""
    Settings file for Eve.
"""
import os

from model import Contact

pg_url = 'postgresql://postgres@192.168.99.100:32772/postgres'

if 'OPENSHIFT_POSTGRESQL_DB_HOST' in os.environ:
  pg_url = 'postgresql://%s:%s/%s' % (
    os.environ['OPENSHIFT_POSTGRESQL_DB_HOST'],
    os.environ['OPENSHIFT_POSTGRESQL_DB_PORT'],
    os.environ['OPENSHIFT_APP_NAME'])

SETTINGS = {
  'SERVER_NAME': 'localhost:5000',
  'DEBUG': True,
  'SQLALCHEMY_DATABASE_URI': pg_url,
  'RESOURCE_METHODS': ['POST', 'GET'],
  'ITEM_METHODS': ['GET', 'PATCH', 'DELETE'],
  'XML': False,
  'JSON': True,
  'X_DOMAINS': '*',
  'X_HEADERS': ['Authorization','Content-type'],
  'SQLALCHEMY_TRACK_MODIFICATIONS': False,
  'DOMAIN': {
    'contact': Contact._eve_schema['contact'],
  },
}
