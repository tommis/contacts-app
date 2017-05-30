#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# Eve imports
from eve import Eve
from eve_sqlalchemy import SQL

from models import Base
from settings import SETTINGS, HOST

application = Eve(auth=None, settings=SETTINGS, data=SQL)

# bind SQLAlchemy
db = application.data.driver
Base.metadata.bind = db.engine
db.Model = Base
db.create_all()

if __name__ == "__main__":
  application.run(debug=True, host=HOST)
