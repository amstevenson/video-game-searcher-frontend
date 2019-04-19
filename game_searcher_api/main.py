from game_searcher_api.app import app
from game_searcher_api.blueprints import register_blueprints

# The starting point of the application. Referenced by manage.py
# Imports it and then initialises blueprints against imported app
register_blueprints(app)
