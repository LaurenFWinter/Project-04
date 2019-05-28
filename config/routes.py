from app import app
from controllers import cruises, categories, cities

app.register_blueprint(cruises.router)
app.register_blueprint(cities.router)
app.register_blueprint(categories.router)
