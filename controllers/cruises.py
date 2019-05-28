from flask import Blueprint
from pony.orm import db_session
from models.Cruise import Cruise, CruiseSchema


# creating a router to this controller
router = Blueprint(__name__, 'cruises')

# getting all of the cruises
@router.route('/cruises', methods=['GET'])
@db_session
def index():
    schema = CruiseSchema(many=True)
    cruises = Cruise.select()
    return schema.dumps(cruises)
