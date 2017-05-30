# -*- coding: utf-8 -*-
"""
    Settings file for Eve.
"""
import os

from models import Contact

pg_url = 'postgresql://postgres@192.168.99.100:32772/postgres'

if 'OPENSHIFT_POSTGRESQL_DB_HOST' in os.environ:
  pg_url = 'postgresql://%s:%s/%s' % (
    os.environ['OPENSHIFT_POSTGRESQL_DB_HOST'],
    os.environ['OPENSHIFT_POSTGRESQL_DB_PORT'],
    os.environ['OPENSHIFT_APP_NAME'])

HOST = 'localhost'

SETTINGS = {
  'SERVER_NAME': HOST + ':5000',
  'DEBUG': True,
  'SQLALCHEMY_DATABASE_URI': pg_url,
  'RESOURCE_METHODS': ['POST', 'GET'],
  'ITEM_METHODS': ['GET', 'PATCH', 'PUT', 'DELETE'],
  'XML': False, 'JSON': True,
  'X_DOMAINS': '*',
  'X_HEADERS': ['Authorization','Content-type','If-Match','Access-Control-Allow-Methods'],
  'X_EXPOSE_HEADERS': 'If-Match',
  'SQLALCHEMY_TRACK_MODIFICATIONS': False,
  'DOMAIN': {
    'contacts': Contact._eve_schema['contact'],
  },
}
