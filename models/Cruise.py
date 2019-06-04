from pony.orm import Set, Optional
from app import db
from marshmallow import Schema, fields, post_load

from .Ship import Ship

class Cruise(db.Entity):
    name = Optional(str)
    region = Optional(str)
    image = Optional(str)
    descriptionshort = Optional(str)
    descriptionlong = Optional(str)
    categories = Set('Category')
    ship = Optional('Ship')
    city = Optional('City')

class CruiseSchema(Schema):
    id = fields.Int(dump_only=True)
    name = fields.Str(optional=True)
    region = fields.Str(optional=True)
    image = fields.Str(optional=True)
    descriptionshort = fields.Str(optional=True)
    descriptionlong = fields.Str(optional=True)
    categories = fields.Nested('CategorySchema', many=True, exclude=('cruises',), dump_only=True)
    ship = fields.Nested('ShipSchema', exclude=('cruises',), dump_only=True)
    ship_id = fields.Int(load_only=True)
    city = fields.Nested('CitySchema', exclude=('cruise',))

    @post_load
    def load_ship(self, data):
        data['ship'] = Ship.get(id=data['ship_id'])
        del data['ship_id']

        return data
