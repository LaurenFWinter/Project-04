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

    los_angeles = City(name='Los Angeles, Hilo, Honolulu, Maui, Kauai, Ensenada, Los Angeles')
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
    # Melbourne, Victoria, Australia | Sydney, New South Wales, Australia

    golden_princess = Ship(image='https://cruiseweb.com/admin/Images/image-gallery/princess-cruises-golden-princess-exterior-02-gallery.jpg', company='Princess Cruise Line', ship='Golden Princess', activities='Princess Book Club, Dancing Classes, Nightclub, Minature Golf, Dance Shows, Hot tubs & Pools, Shopping Center')
    costa_atlatica = Ship(image='https://d23n7ahjfnjotp.cloudfront.net/imgs/mobileheaderipad/ship_391789_deliziosa_1024x416_mobhdr.jpg', company='Costa Cruise Line', ship='Costa Deliziosa', activities='4D Cinema, Casino, Grand Bar with dance floor, Pool deck with retractable glass roofand giant screen, Library, Virtual World, Squok Club, Children’s pool, Theatre on three levels, Disco, Internet Point, Shopping Center')
    carnival_panorama = Ship(image='https://www.cruisemapper.com/images/ships/2099-bc6b2a13150.jpg', company='Carnival Cruise Line', ship='Carnival Panorama', activities='Limelight Lounge, FunHub Internet room, Clubhouse and Bar, Thrill Theatre 5D cinema room, Circle C kids club lounge, Club O2 teens club lounge, Warehouse Video Arcade, BlueIguana Tequila Bar poolside Mexican bar')
    seabourn_ovation = Ship(image='https://www.cruisemapper.com/images/ships/1165-ef08d3bc6ec5d26a002994d8f26ca9e0.jpg', company='Seabourn Cruise Line', ship='Seabourn Ovation', activities='Living room, The Casino, The Club lounge, Whirlpool, Card Room, 3 duty-free shops, The Coffee Bar, Patio Pool, Sky Bar, The “Spa at Seabourn”, Fitness Center, Observation Bar')
    seven_seas_navigator = Ship(image='https://www.cruisemapper.com/images/ships/633-large-26dd0dbc6e3f4c8043749885523d6a25.jpg', company='Seven Seas Cruise Line', ship='Navigator', activities='Signature cocktails bar with grand piano, Library, Coffee Connection, Smoking lounge with comfortable leather armchairs; offers hand-rolled Cuban cigars, Card Room / Conference Room, Stars Lounge disco nightclub, The Boutique duty-free shopping arcade, Casino, The Top Deck Power Walking/Jogging Track')
    msc_meraviglia = Ship(image='https://www.cruisemapper.com/images/ships/1187-f0fc230712f.jpg', company='MSC Cruise Line', ship='Meraviglia', activities='Boutique and Accessories Shop, Casino, Art Lounge and Bar, Solarium adults-only relaxation area, Main Pool area, Sports and kids facilities, Piano Lounge and Bar, 4D Cinema, F1 car simulator, Flight Simulator')
    disney_dream = Ship(image='https://www.cruisemapper.com/images/ships/548-large-8d34201a5b85900908db6cae92723617.jpg', company='Disney Cruise Line', ship='Dream', activities='Buena Vista Theatre, Shutters PhotoShop photographic services, Vista Cafe for specialty coffees and teas, D Lounge Bar & Nightclub, Evolution Disco & Nightclub, Pink adults-only champagne bar, Vibe Disco & Club Lounge teens only, It’s A Small World Nursery, Dream’s Oceaneer Club kids 3-12 years, Senses Spa & Fitness Complex, Frozone Treats, Donald’s Pool, Mickey’s Pool')
    royal_caribbean_harmony_of_the_seas = Ship(image='https://www.cruisemapper.com/images/ships/1067-548ad508c0796b0910e27ea19827acd4.jpg', company='Royal Caribbean Cruise Line', ship='Harmony Of The Seas', activities='Royal Theater, Indoor ice-skating rink, AquaTheatre pool, Entertainment Place nightclub, The Attic Comedy Club, Jazz Lounge, Art Gallery, Central Park outdoor area with live plants, Casino Royale Card Room, Video Games Arcade, Sports Court, Jogging Track, Rock-climbing Walls')


    # radiance_of_the_seas = Ship(company_name='Royal Caribbean, Radiance Of The Seas')

    Cruise(
        name='Exotic Explorer',
        region='Hawaii',
        itinerary=los_angeles,
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
        itinerary=los_angeles,
        # itinerary=[anchorage, alaska, hubbard_glacier, glacier_bay_national_park, skagwa, juneau, ketchikan, vancouver], image='tofillin',
        image='tofillin',
        description_short='It is rugged and wild with glaciers, countless rivers and lakes, majestic mountain peaks, some active volcanoes, and nearly 34,000 miles of tidal shoreline.',
        description_long='Alaska’s unspoiled wildlands provide some of the best wildlife habitat in the country for animals such as eagles, salmon, caribou and grizzly bears. They also provide sustenance for Alaska Natives who have lived off the land for thousands of years.',
        categories=[cold_climate],
        ship=golden_princess
        # things_to_do='Hicking, snorkling, shopping, dining, drinking'
    )


db.commit()
