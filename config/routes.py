import os
from app import app
from controllers import cruises, categories, cities, ships, auth
from flask import abort

app.register_blueprint(cruises.router, url_prefix='/api')
app.register_blueprint(cities.router, url_prefix='/api')
app.register_blueprint(ships.router, url_prefix='/api')
app.register_blueprint(categories.router, url_prefix='/api')
app.register_blueprint(auth.router, url_prefix='/api')


@app.route('/')
@app.route('/<path:path>')
def catch_all(path='index.html'):
    if os.path.isfile('public/' + path):
        return app.send_static_file(path)

    return abort(404)
