from app import db
from pony.orm import Required, Set
from marshmallow import Schema, fields

class Ship(db.Entity):
    company = Required(str)
    ship = Required(str)
    image = Required(str)
    activities = Required(str)
    itinerary = Set('City')
    cruises = Set('Cruise')

class ShipSchema(Schema):
    id = fields.Str(dump_only=True)
    company = fields.Str(required=True)
    ship = fields.Str(required=True)
    image = fields.Str(required=True)
    activities = fields.Str(required=True)
    itinerary = fields.Nested('CitySchema', required=True, many=True)
    cruises = fields.Nested('CruiseSchema', many=True, exclude=('ship', 'categories'))
