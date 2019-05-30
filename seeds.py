from pony.orm import db_session
from app import db
from models.Cruise import Cruise
from models.Category import Category
from models.City import City
from models.Ship import Ship

db.drop_all_tables(with_all_data=True)
db.create_tables()

with db_session():

    warm_climate = Category(name='Warm Climate')
    cold_climate = Category(name='Cold Climate')

    los_angeles = City(name='Los Angeles')
    hilo = City(name='Hilo')
    honolulu = City(name='Honolulu')
    maui = City(name='Maui')
    kauai = City(name='Kauai')
    ensenada = City(name='Ensenada')
    anchorage = City(name='Anchorage')
    alaska = City(name='Alaska')
    hubbard_glacier = City(name='Hubbard Glacier')
    glacier_bay_national_park = City(name='Glacier Bay National Park')
    skagwa = City(name='Skagwa')
    juneau = City(name='Juneau')
    ketchikan = City(name='Ketchikan')
    vancouver = City(name='Vancouver') #image and lat and long

    golden_princess = Ship(name='Princess Cruise Line, Golden Princess')
    radiance_of_the_seas = Ship(name='Royal Caribbean, Radiance Of The Seas')

    Cruise(
        name='Exotic Explorer',
        region='Hawaii',
        itinerary=[los_angeles, hilo, honolulu, maui, kauai, ensenada, los_angeles],
        image='tofillin',
        description_short="From active volcanoes to coffee farms and beautiful beaches to rich history, there's lots to     see and do on the island of Hawaii.",
        description_long='The state of Hawaii derives its name from the name of its largest island, Hawaiʻi. The legendary figure from Hawaiian myth. He is said to have discovered the islands when they were first settled.',
        categories=[warm_climate],
        ship=golden_princess
        # things_to_do='Hicking, snorkling, shopping, dining, drinking'
    )

    Cruise(
        name='Southern Glacier Cruise',
        region='Southeast Alaska',
        itinerary=[anchorage, alaska, hubbard_glacier, glacier_bay_national_park, skagwa, juneau, ketchikan, vancouver], image='tofillin',
        description_short='It is rugged and wild with glaciers, countless rivers and lakes, majestic mountain peaks, some active volcanoes, and nearly 34,000 miles of tidal shoreline.',
        description_long='Alaska’s unspoiled wildlands provide some of the best wildlife habitat in the country for animals such as eagles, salmon, caribou and grizzly bears. They also provide sustenance for Alaska Natives who have lived off the land for thousands of years.',
        categories=[cold_climate],
        ship=radiance_of_the_seas
        # things_to_do='Hicking, snorkling, shopping, dining, drinking'
    )


db.commit()
