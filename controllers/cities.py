from flask import Blueprint
from pony.orm import db_session
from models.City import City, CitySchema

router = Blueprint(__name__, 'cities')

@router.route('/cities', methods=['GET'])
@db_session
def index():

    schema = CitySchema(many=True)
    cities = City.select()
    return schema.dumps(cities)
