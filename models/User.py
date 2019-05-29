import bcrypt
from pony.orm import Required, Set
from marshmallow import Schema, fields
from app import db


class User(db.Entity):

    username = Required(str, unique=True)
    email = Required(str, unique=True)
    password_hash = Required(str)
    cruises = Set('Cruise')

    def is_password_valid(self, plaintext):
        return bcrypt.checkpw(plaintext.encode('utf8'), self.password_hash.encode('utf8'))


class UserSchema(Schema):
    id = fields.Int(dump_only=True)
    username = fields.Str(required=True)
    email = fields.Str(required=True)
    password = fields.Str(load_only=True)
    password_confirmation = fields.Str(load_only=True)
    cruises = fields.Nested('CruiseSchema', many=True, exclude=('user',))

    def generate_hash(self, plaintext):
        return bcrypt.hashpw(plaintext.encode('utf8'), bcrypt.gensalt(8)).decode('utf8')
