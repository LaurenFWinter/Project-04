from flask import Blueprint, request, jsonify, abort
from pony.orm import db_session
from app import db
from marshmallow import ValidationError
from models.City import City, CitySchema

router = Blueprint(__name__, 'cities')

@router.route('/cities', methods=['GET'])
@db_session
def index():

    schema = CitySchema(many=True)
    cities = City.select()
    return schema.dumps(cities)


@router.route('/cities', methods=['POST'])
@db_session
def create():
    schema = CitySchema()
    try:
        data = schema.load(request.get_json())
        city = City(**data)
        db.commit()
    except ValidationError as err:
        return jsonify({'message': 'Validation failed', 'errors': err.messages}), 422

    return schema.dumps(city), 201



@router.route('/cities/<int:city_id>',
    methods=['GET'])
@db_session
def show(city_id):
    schema = CitySchema()
    city = City.get(id=city_id)

    if not city:
        abort(404)

    return schema.dumps(city)


@router.route('/cities/<int:city_id>', methods=['PUT'])
@db_session
def update(city_id):
    schema = CitySchema()
    city = City.get(id=city_id)

    if not city:
        abort(404)

    try:
        data = schema.load(request.get_json())
        city.set(**data)
        db.commit()
    except ValidationError as err:
        return jsonify({'message': 'Validation failed', 'errors': err.messages}), 422

    return schema.dumps(city)


@router.route('/cities/<int:city_id>', methods=['DELETE'])
@db_session
def delete(city_id):
    city = City.get(id=city_id)

    if not city:
        abort(404)

    city.delete()
    db.commit()

    return '', 204
