from app import db
from pony.orm import Required, Optional
from marshmallow import Schema, fields

class City(db.Entity):
    name = Required(str)
    cruise = Optional('Cruise')

class CitySchema(Schema):
    id = fields.Str(dump_only=True)
    name = fields.Str(required=True)
    cruise = fields.Nested('CruiseSchema', exclude=('city',))
