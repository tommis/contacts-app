# -*- coding: utf-8 -*-
"""
    SQL tables.
"""

from eve_sqlalchemy.decorators import registerSchema
from sqlalchemy import Column, DateTime, func, Integer, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class CommonColumns(Base):
    __abstract__ = True
    _created = Column(DateTime,  default=func.now())
    _updated = Column(
        DateTime,
        default=func.now(),
        onupdate=func.now())
    _etag = Column(String)
    _id = Column(Integer, primary_key=True, autoincrement=True)


@registerSchema('contact')
class Contact(CommonColumns):
    __tablename__ = 'contact'
    firstname  = Column(String(200))
    lastname = Column(String(200))
    age = Column(Integer)
    address = Column(String(200))
    cardcolor = Column(String(8))

    def __repr__(self):
        return '<Contact {0} {1}>' % self.lastname, self.firstname


