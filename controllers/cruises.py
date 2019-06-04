from flask import Blueprint, request, jsonify, abort
from pony.orm import db_session
from app import db
from marshmallow import ValidationError
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




@router.route('/cruises', methods=['POST'])
@db_session
def create():
    schema = CruiseSchema()
    try:
        data = schema.load(request.get_json())
        cruise = Cruise(**data)
        db.commit()
    except ValidationError as err:
        return jsonify({'message': 'Validation failed', 'errors': err.messages}), 422

    return schema.dumps(cruise), 201



@router.route('/cruises/<int:cruise_id>',
    methods=['GET'])
@db_session
def show(cruise_id):
    schema = CruiseSchema()
    cruise = Cruise.get(id=cruise_id)

    if not cruise:
        abort(404)

    return schema.dumps(cruise)

# edit
@router.route('/cruises/<int:cruise_id>', methods=['PUT'])
@db_session
def update(cruise_id):
    schema = CruiseSchema()
    cruise = Cruise.get(id=cruise_id)

    if not cruise:
        abort(404)

    try:
        data = schema.load(request.get_json())
        cruise.set(**data)
        db.commit()
    except ValidationError as err:
        return jsonify({'message': 'Validation failed', 'errors': err.messages}), 422

    return schema.dumps(cruise)


@router.route('/cruises/<int:cruise_id>', methods=['DELETE'])
@db_session
def delete(cruise_id):
    cruise = Cruise.get(id=cruise_id)

    if not cruise:
        abort(404)

    cruise.delete()
    db.commit()

    return '', 204
