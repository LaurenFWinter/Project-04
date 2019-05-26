from app import db
from models.Destination import Destination

db.drop_all_tables(with_all_data=True)
db.create_tables()

Destination(
    name='Exotic Explorer',
    region='Hawaii',
    image='tofillin',
    description_short="From active volcanoes to coffee farms and beautiful beaches to rich history, there's lots to see and do on the island of Hawaii.",
    description_long='The state of Hawaii derives its name from the name of its largest island, Hawaiʻi. The legendary figure from Hawaiian myth. He is said to have discovered the islands when they were first settled.',
    map='tofillin'
    )
