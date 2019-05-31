from app import db
from pony.orm import Required, Set
from marshmallow import Schema, fields

class Category(db.Entity):
    name = Required(str)
    image = Required(str)
    description_short = Required(str)
    cruises = Set('Cruise')

class CategorySchema(Schema):
    id = fields.Str(dump_only=True)
    name = fields.Str(required=True)
    cruises = fields.Nested('CruiseSchema', many=True)
