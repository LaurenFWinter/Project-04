from pony.orm import Required, Set
from app import db
from marshmallow import Schema, fields

class Destination(db.Entity):
    name = Required(str)
    region = Required(str)
    itinerary = Required(str)
    image = Required(str)
    description_short = Required(str)
    description_long = Required(str)
    categories = Set('Category')


class DestinationSchema(Schema):
    id = fields.Int(dump_only=True)
    name = fields.Str(required=True)
    region = fields.Str(required=True)
    itinerary = fields.Str(required=True)
    image = fields.Int(required=True)
    description_short = fields.Int(required=True)
    description_long = fields.Int(required=True)
    categories = fields.Nested('CategorySchema', many=True, exclude=('destinations', ))
