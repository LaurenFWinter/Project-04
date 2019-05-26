from flask import Flask
from pony.orm import Database

app = Flask(__name__)
db = Database()

db.bind(provider='postgres', database='cruise')
db.generate_mapping(create_tables=True)

@app.route('/')
def home():
    return 'Hello World!', 200
