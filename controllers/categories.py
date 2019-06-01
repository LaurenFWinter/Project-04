from flask import Blueprint
from pony.orm import db_session
from models.Category import Category, CategorySchema

router = Blueprint(__name__, 'categories')

@router.route('/categories', methods=['GET'])
@db_session
def index():

    schema = CategorySchema(many=True)
    categories = Category.select()
    return schema.dumps(categories)


@router.route('/categories/<int:category_id>', methods=['GET'])
@db_session
def get_categories(category_id):

    schema = CategorySchema()
    categories = Category.get(id=category_id)
    return schema.dumps(categories)



# @router.route('/categories', methods=['POST'])
# @db_session
# def create():
#     schema = CategorySchema()
#
#     try:
#         data = schema.load(request.get_json())
#         category = Category(**data)
#         db.commit()
#     except ValidationError as err:
#         return jsonify({'message': 'Validation failed', 'errors': err.messages}), 422
#
#     return schema.dumps(category), 201
