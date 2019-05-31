from app import db
from pony.orm import Required, Set
from marshmallow import Schema, fields, post_load
from models.Cruise import CruiseSchema
from models.Ship import ShipSchema

class Category(db.Entity):
    name = Required(str)
    image = Required(str)
    description_short = Required(str)
    ship = Set('Ship')
    cruises = Set('Cruise')

class CategorySchema(Schema):
    id = fields.Str(dump_only=True)
    name = fields.Str(required=True)
    cruises = fields.Nested('CruiseSchema', many=True, dump_only=True, exclude=('categories',))
    cruises_ids = fields.List(fields.Int(), load_only=True)
    ships = fields.Nested('ShipSchema', many=True, dump_only=True, exclude=('categories',))
    ships_ids = fields.List(fields.Int(), load_only=True)

    @post_load
    def load_cruises(self, data):
        data['cruises'] = [CruiseSchema.get(id=cruise_id) for cruise_id in data['cruises_ids']]
        del data['cruises_ids']

    @post_load
    def load_ships(self, data):
        data['ships'] = [ShipSchema.get(id=ship_id) for ship_id in data['ships_ids']]
        del data['ships_ids']
