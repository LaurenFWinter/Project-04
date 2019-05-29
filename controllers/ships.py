from flask import Blueprint
from pony.orm import db_session
from models.Ship import Ship, ShipSchema


# creating a router to this controller
router = Blueprint(__name__, 'ships')

# getting all of the ships
@router.route('/api/ships', methods=['GET'])
@db_session
def index():
    schema = ShipSchema(many=True)
    ships = Ship.select()
    return schema.dumps(ships)
