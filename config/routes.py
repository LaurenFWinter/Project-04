from app import app
from controllers import cruises, categories, cities, ships, auth

app.register_blueprint(cruises.router, url_prefix='/api')
app.register_blueprint(cities.router, url_prefix='/api')
app.register_blueprint(ships.router, url_prefix='/api')
app.register_blueprint(categories.router, url_prefix='/api')
app.register_blueprint(auth.router, url_prefix='/api')
