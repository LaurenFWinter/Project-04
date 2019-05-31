from flask import Blueprint, request, jsonify, abort
from pony.orm import db_session
from app import db
from marshmallow import ValidationError
from models.Ship import Ship, ShipSchema
from lib.secure_route import secure_route

# creating a router to this controller
router = Blueprint(__name__, 'ships')

# getting all of the ships
@router.route('/ships', methods=['GET'])
@db_session
def index():

    schema = ShipSchema(many=True)
    ships = Ship.select()
    return schema.dumps(ships)


@router.route('/ships', methods=['POST'])
@db_session
@secure_route
def create():
    schema = ShipSchema()
    try:
        data = schema.load(request.get_json())
        ship = Ship(**data)
        db.commit()
    except ValidationError as err:
        return jsonify({'message': 'Validation failed', 'errors': err.messages}), 422

    return schema.dumps(ship), 201



@router.route('/ships/<int:ship_id>',
    methods=['GET'])
@db_session
def show(ship_id):
    schema = ShipSchema()
    ship = Ship.get(id=ship_id)

    if not ship:
        abort(404)

    return schema.dumps(ship)


@router.route('/ships/<int:ship_id>', methods=['PUT'])
@db_session
@secure_route
def update(ship_id):
    schema = ShipSchema()
    ship = Ship.get(id=ship_id)

    if not ship:
        abort(404)

    try:
        data = schema.load(request.get_json())
        ship.set(**data)
        db.commit()
    except ValidationError as err:
        return jsonify({'message': 'Validation failed', 'errors': err.messages}), 422

    return schema.dumps(ship)


@router.route('/ships/<int:ship_id>', methods=['DELETE'])
@db_session
@secure_route
def delete(ship_id):
    ship = Ship.get(id=ship_id)

    if not ship:
        abort(404)

    ship.delete()
    db.commit()

    return '', 204
