from flask import Blueprint
from models.Destination import Destination, DestinationSchema

# creating a router to this controller
router = Blueprint(__name__, 'destination')

# getting all of the destinations
@router.route('/destination', methods=['GET'])
def index():
    schema = DestinationSchema(many=True)
    destination = Destination.select()
    return schema.dumps(destination)
