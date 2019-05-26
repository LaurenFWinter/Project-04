from app import db_session
from app import db
from models.Destination import Destination

db.drop_all_tables(with_all_data=True)
db.create_tables()

with db_session():

    Destination(
        name='Exotic Explorer',
        region='Hawaii',
        # itinerary=[Los Angeles, Hilo, Honolulu, Maui, Kauai , Ensenada, Los Angeles],
        image='tofillin',
        description_short="From active volcanoes to coffee farms and beautiful beaches to rich history, there's lots to see and do on the island of Hawaii.",
        description_long='The state of Hawaii derives its name from the name of its largest island, Hawaiʻi. The legendary figure from Hawaiian myth. He is said to have discovered the islands when they were first settled.',
        map='tofillin'
    )

    Destination(
        name='Southern Glacier Cruise',
        region='Southeast Alaska',
        # itinerary=[Anchorage, Alaska, Hubbard Glacier, Glacier Bay National Park, Skagwa, Juneau, Ketchikan, Vancouver],
        image='tofillin',
        description_short='It is rugged and wild with glaciers, countless rivers and lakes, majestic mountain peaks, some active volcanoes, and nearly 34,000 miles of tidal shoreline.',
        description_long='Alaska’s unspoiled wildlands provide some of the best wildlife habitat in the country for animals such as eagles, salmon, caribou and grizzly bears. They also provide sustenance for Alaska Natives who have lived off the land for thousands of years.',
        map='tofillin'
    )

    Destination(
        name='Southern Glacier Cruise',
        region='Southeast Alaska',
        # itinerary=[Anchorage, Alaska, Hubbard Glacier, Glacier Bay National Park, Skagwa, Juneau, Ketchikan, Vancouver],
        image='tofillin',
        description_short='It is rugged and wild with glaciers, countless rivers and lakes, majestic mountain peaks, some active volcanoes, and nearly 34,000 miles of tidal shoreline.',
        description_long='Alaska’s unspoiled wildlands provide some of the best wildlife habitat in the country for animals such as eagles, salmon, caribou and grizzly bears. They also provide sustenance for Alaska Natives who have lived off the land for thousands of years.',
        map='tofillin'
    )

db.commit()
