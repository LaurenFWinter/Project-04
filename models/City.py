from app import db
from pony.orm import Required, Set
from marshmallow import Schema, fields

class City(db.Entity):
    name = Required(str)
    cruises = Set('Cruise')

class CitySchema(Schema):
    id = fields.Str(dump_only=True)
    name = fields.Str(required=True)
