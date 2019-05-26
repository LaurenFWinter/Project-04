from app import app
from controllers import destinations, categories

app.register_blueprint(destinations.router)
app.register_blueprint(categories.router)
