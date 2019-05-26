from app import db
from pony.orm import Required, Set
from marshmallow import Schema, fields

class Category(db.Entity):
    name = Required(str)
    destinations = Set('Destination')

class CategorySchema(Schema):
    id = fields.Str(dump_only=True)
    name = fields.Str(required=True)
    destinations = fields.Nested('DestinationSchema', many=True)
