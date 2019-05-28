from app import db
from pony.orm import Required, Set
from marshmallow import Schema, fields

class Ship(db.Entity):
    name = Required(str)
    cruises = Set('Cruise')

class ShipSchema(Schema):
    id = fields.Str(dump_only=True)
    name = fields.Str(required=True)
    cruises = fields.Nested('CruiseSchema', many=True, exclude=('ship', 'categories'))
