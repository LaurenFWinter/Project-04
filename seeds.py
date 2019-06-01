from pony.orm import db_session
from app import db
from models.Cruise import Cruise
from models.Category import Category
from models.City import City
from models.Ship import Ship

db.drop_all_tables(with_all_data=True)
db.create_tables()

with db_session():


############ city data

    los_angeles = City(name='Los Angeles, Hilo, Honolulu, Maui, Kauai, Ensenada, Los Angeles')
    anchorage = City(name='Anchorage, Alaska, Hubbard Glacier, Glacier Bay National Park, Skagwa, Juneau, Ketchikan, Vancouver')


############## ship data


    costa_atlatica = Ship(company='Costa Cruise Line', image='https://d23n7ahjfnjotp.cloudfront.net/imgs/mobileheaderipad/ship_391789_deliziosa_1024x416_mobhdr.jpg', ship='Costa Deliziosa', activities='4D Cinema, Casino, Grand Bar with dance floor, Pool deck with retractable glass roofand giant screen, Library, Virtual World, Squok Club, Children’s pool, Theatre on three levels, Disco, Internet Point, Shopping Center')

    carnival_panorama = Ship(company='Carnival Cruise Line', ship='Carnival Panorama', image='https://www.cruisemapper.com/images/ships/2099-bc6b2a13150.jpg', activities='Limelight Lounge, FunHub Internet room, Clubhouse and Bar, Thrill Theatre 5D cinema room, Circle C kids club lounge, Club O2 teens club lounge, Warehouse Video Arcade, BlueIguana Tequila Bar poolside Mexican bar')

    seabourn_ovation = Ship(company='Seabourn Cruise Line', image='https://www.cruisemapper.com/images/ships/1165-ef08d3bc6ec5d26a002994d8f26ca9e0.jpg', ship='Seabourn Ovation', activities='Living room, The Casino, The Club lounge, Whirlpool, Card Room, 3 duty-free shops, The Coffee Bar, Patio Pool, Sky Bar, The “Spa at Seabourn”, Fitness Center, Observation Bar')

    seven_seas_navigator = Ship(company='Seven Seas Cruise Line', image='https://www.cruisemapper.com/images/ships/633-large-26dd0dbc6e3f4c8043749885523d6a25.jpg', ship='Navigator', activities='Signature cocktails bar with grand piano, Library, Coffee Connection, Smoking lounge with comfortable leather armchairs; offers hand-rolled Cuban cigars, Card Room / Conference Room, Stars Lounge disco nightclub, The Boutique duty-free shopping arcade, Casino, The Top Deck Power Walking/Jogging Track')

    msc_meraviglia = Ship(company='MSC Cruise Line', image='https://www.cruisemapper.com/images/ships/1187-f0fc230712f.jpg', ship='Meraviglia', activities='Boutique and Accessories Shop, Casino, Art Lounge and Bar, Solarium adults-only relaxation area, Main Pool area, Sports and kids facilities, Piano Lounge and Bar, 4D Cinema, F1 car simulator, Flight Simulator')

    disney_dream = Ship(company='Disney Cruise Line', image='https://www.cruisemapper.com/images/ships/548-large-8d34201a5b85900908db6cae92723617.jpg', ship='Dream', activities='Buena Vista Theatre, Shutters PhotoShop photographic services, Vista Cafe for specialty coffees and teas, D Lounge Bar & Nightclub, Evolution Disco & Nightclub, Pink adults-only champagne bar, Vibe Disco & Club Lounge teens only, It’s A Small World Nursery, Dream’s Oceaneer Club kids 3-12 years, Senses Spa & Fitness Complex, Frozone Treats, Donald’s Pool, Mickey’s Pool')

    royal_caribbean_harmony_of_the_seas = Ship(company='Royal Caribbean Cruise Line', image='https://www.cruisemapper.com/images/ships/1067-548ad508c0796b0910e27ea19827acd4.jpg', ship='Harmony Of The Seas', activities='Royal Theater, Indoor ice-skating rink, AquaTheatre pool, Entertainment Place nightclub, The Attic Comedy Club, Jazz Lounge, Art Gallery, Central Park outdoor area with live plants, Casino Royale Card Room, Video Games Arcade, Sports Court, Jogging Track, Rock-climbing Walls')


############# category data

    asia = Category(
    name='Asia',
    image='https://www.royalcaribbean.co.uk/assets/images/holiday-destinations/region-module/rccl_regionModule1.jpg',
    description_short='You’ll be blown away by incredible Asia. Imagine luxuriating on an idyllic Thai beach or exploring magical gardens in Japan. You’ll adore shopping in Hong Kong’s bustling markets and sampling delicious delicacies in Vietnam. With so many out-of-this-world experiences, it’s one big adventure.'
    )

    australia = Category(
    name='Australia and New Zealand',
    description_short='Feel on top of the world climbing the Sydney Harbour Bridge or be stunned by the jaw-dropping scenery of Milford Sound. Keep an eye out for hobbits at film locations all over New Zealand or visit a Tauranga kiwi orchard. Life down under – you can’t beat it.',
    image='https://www.royalcaribbean.co.uk/assets/images/holiday-destinations/region-module/rccl_regionModule2.jpg',
    )

    bahamas = Category(
    name='Bahamas & Bermuda',
    description_short='You’ll enjoy adventure unlimited in the Bahamas and Bermuda. Explore by kayak or 4x4, discovering rocky outcrops, uninhabited islands and lush interiors. Kids will have the time of their lives – swimming with dolphins, splashing in aquaparks and snorkeling in sparkling seas.',
    image='https://www.royalcaribbean.co.uk/assets/images/holiday-destinations/region-module/rccl_regionModule3.jpg',
    )

    baltic = Category(
    name='Baltic',
    description_short='Be mesmerized by long nights of summer sun, glittering waters off stunning islands and dramatic scenery that takes your breath away. You’ll be captivated by the pleasures of the Baltic, from cool design in Denmark to St. Petersburg’s opulent treasures. It’s truly unmissable.',
    image='https://www.royalcaribbean.co.uk/assets/images/holiday-destinations/region-module/rccl_regionModule4.jpg',
    )

    caribbean = Category(
    name='Caribbean',
    description_short='Relax – you’re in paradise. White sand beaches, cool blue oceans, reggae rhythms drifting on the breeze – what’s the hurry? When you’re ready, explore heady spice plantations, the streets of Havana and cascading waterfalls – every day is laid-back in the fabulous Caribbean.',
    image='https://www.royalcaribbean.co.uk/assets/images/holiday-destinations/region-module/rccl_regionModule5.jpg',
    )

    uk = Category(
    name='Cruises from UK',
    description_short='Say goodbye to holiday hassle with our fabulous cruises from Southampton. Relax from the moment you step onboard, enjoying our extraordinary facilities and amazing choice of restaurants. All while you’ll be sailing to a wide range of fabulous destinations, from Spain’s Canary Islands to Russia’s St. Petersburg. So sit back and enjoy the ride.',
    image='https://www.royalcaribbean.co.uk/assets/images/holiday-destinations/region-module/rccl_regionModule6.jpg',
    )

    europe = Category(
    name='Europe',
    description_short='Get the tick list ready. You’re about to experience those ‘must-see’ places in Europe that you’ve always dreamed of seeing. From Rome’s iconic ruins and Venice’s famous canals to Granada’s Alhambra and Norway’s stunning fjords – the choice is yours.',
    image='https://www.royalcaribbean.co.uk/assets/images/holiday-destinations/region-module/rccl_regionModule7.jpg',
    )

    mediterranean = Category(
    name='Mediterranean',
    description_short='Gasp at gorgeous sea views from Santorini’s stunning cliffs, dotted with white-washed houses that sparkle in the sun. Watch the world go by in a lively waterfront bar or discover hidden gems, such as Montenegro’s spectacular scenery and Croatia’s lively cities. In the Mediterranean, your options are endless.', image='https://www.royalcaribbean.co.uk/assets/images/holiday-destinations/region-module/rccl_regionModule8.jpg',
    )

    middleeast = Category(
    name='Middle East',
    description_short='Sample Arabic pastries, ride a camel in the desert or shop for falcons in the souk. From glitzy malls to stunning Islamic art, your Middle East holiday will be sensational.',
    image='https://www.royalcaribbean.co.uk/assets/images/holiday-destinations/region-module/rccl_regionModule13.jpg',
    )

    northamerica = Category(name='North America',
    description_short='Imagine deep fjords, icy blue glaciers and untamed snowcaps – Alaska’s natural wilderness is exhilarating in the extreme. Immerse yourself in the buzz of New York or the laid-back vibes of the Florida Keys – no matter what you choose, your holiday to North America will be amazing.',
    image='https://www.royalcaribbean.co.uk/assets/images/holiday-destinations/region-module/rccl_regionModule9.jpg',
    )

    oceanvoyages = Category(
    name='Ocean Voyages',
    description_short='It’s not always about where you end up, but the fun you have getting there. If you love adventures at sea, let us take you onboard. We’ll entertain, pamper, amuse and excite you with our fabulous facilities and amazing entertainment, sharing unforgettable moments along the way.',
    image='https://www.royalcaribbean.co.uk/assets/images/holiday-destinations/region-module/rccl_regionModule10.jpg',
    )

    scandinavia = Category(
    name='Scandinavia',
    description_short='Stand face-to-face with Viking ships or taste world class New Nordic cuisine. You’ll love the buzz of Scandinavia and its creative and youthful vibe. With amazing art, fascinating history and outstanding natural beauty to explore, you’ll be impressed.',
    image='https://www.royalcaribbean.co.uk/assets/images/holiday-destinations/region-module/rccl_regionModule11.jpg',
    )

    southpacific = Category(
    name='South Pacific',
    description_short='Who doesn’t dream of a paradise island in the South Pacific, with swaying palm trees and beaches of pure white sand? There’s a world of wonder beneath too, in the vibrant coral reefs teeming with colourful fish. Grab a snorkel and explore.',
    image='https://www.royalcaribbean.co.uk/assets/images/holiday-destinations/region-module/rccl_regionModule12.jpg',
    )

############# cruise data

    cruiseone = Cruise(name='Exotic Explorer', region='Hawaii', image='tofillin', description_short="From active volcanoes to coffee farms and beautiful beaches to rich history, there's lots to see and do on the island of Hawaii.", description_long='The state of Hawaii derives its name from the name of its largest island, Hawaiʻi. The legendary figure from Hawaiian myth. He is said to have discovered the islands when they were first settled.', categories=[southpacific], ship=disney_dream)

    cruisetwo = Cruise(name='Southern Glacier Cruise', region='Southeast Alaska', image='tofillin', description_short='It is rugged and wild with glaciers, countless rivers and lakes, majestic mountain peaks, some active volcanoes, and nearly 34,000 miles of tidal shoreline.', description_long='Alaska’s unspoiled wildlands provide some of the best wildlife habitat in the country for animals such as eagles, salmon, caribou and grizzly bears. They also provide sustenance for Alaska Natives who have lived off the land for thousands of years.', categories=[scandinavia], ship=disney_dream)


    db.commit()
