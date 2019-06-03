from pony.orm import Required, Set
from app import db
from marshmallow import Schema, fields

class Cruise(db.Entity):
    name = Required(str)
    region = Required(str)
    image = Required(str)
    descriptionshort = Required(str)
    descriptionlong = Required(str)
    categories = Set('Category')
    ship = Required('Ship')

class CruiseSchema(Schema):
    id = fields.Int(dump_only=True)
    name = fields.Str(required=True)
    region = fields.Str(required=True)
    image = fields.Str(required=True)
    descriptionshort = fields.Str(required=True)
    descriptionlong = fields.Str(required=True)
    categories = fields.Nested('CategorySchema', many=True, exclude=('cruises',), dump_only=True)
    ship = fields.Nested('ShipSchema', exclude=('cruises',), dump_only=True)
