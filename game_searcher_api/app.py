from flask import Flask
from game_searcher_api.logconfig import register_logging

register_logging()
app = Flask(__name__)
app.config.from_pyfile("config.py")