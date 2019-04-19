import os
from game_searcher_api.secret_key import SECRET_KEY
basedir = os.path.abspath(os.path.dirname(__file__))

# This file should be used only for containing environment variables, nothing else
APP_NAME = os.environ["APP_NAME"] = "game-searcher-api"
COMMIT = os.environ["COMMIT"] = "LOCALE"
LOG_LEVEL = os.environ["LOG_LEVEL"] = "DEBUG"
IGDB_URI = os.environ["IGDB_URI"] = "https://api-v3.igdb.com"
SECRET_KEY = os.environ["SECRET_KEY"] = SECRET_KEY
os.environ["PYTHONUNBUFFERED"] = "yes"
