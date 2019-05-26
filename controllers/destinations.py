from flask import Blueprint
from models.Destination import Destination, DestinationSchema


# creating a router to this controller
router = Blueprint(__name__, 'destinations')

# getting all of the destinations
@router.route('/destinations', methods=['GET'])
def index():
    schema = DestinationSchema(many=True)
    destinations = Destination.select()
    return schema.dumps(destinations)
