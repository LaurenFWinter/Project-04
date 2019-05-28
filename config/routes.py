from app import app
from controllers import cruises, categories, cities, ships

app.register_blueprint(cruises.router)
app.register_blueprint(cities.router)
app.register_blueprint(ships.router)
app.register_blueprint(categories.router)
