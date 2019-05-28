from app import app
from controllers import cruises, categories

app.register_blueprint(cruises.router)
app.register_blueprint(categories.router)
