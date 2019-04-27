from flask import Blueprint, Response, request
from game_searcher_api.service.igdb import IGDB
from data_manipulation_utils import convert_igdb_json_to_usable_format
import json
import logging

game = Blueprint('game', __name__)

logger = logging.getLogger()

@game.route("/games/<offset>/<rating>/<genre>/<after_date>", methods=["GET", "OPTIONS"])
def all_games(offset, rating, genre, after_date):
    try:
        all_games_json = json.loads(IGDB().get_all_games(offset, rating, genre, after_date).text)

        return Response(response=json.dumps(convert_igdb_json_to_usable_format(all_games_json)),
                        mimetype='application/json', 
                        status=200,
                        headers={'Access-Control-Allow-Origin': '*'})
    except Exception as ex:
        logger.error(ex)
        raise ex

@game.route("/games/<id>", methods=["GET", "OPTIONS"])
def get_game_by_id(id):
    try:
        game_json = json.loads(IGDB().get_game_by_id(id).text)

        return Response(response=json.dumps(convert_igdb_json_to_usable_format(game_json)),
                        mimetype='application/json', 
                        status=200,
                        headers={'Access-Control-Allow-Origin': '*'})
    except Exception as ex:
        logger.error(ex)
        raise ex

@game.route("/games/genres", methods=["GET", "OPTIONS"])
def all_genres():
    try:
        return Response(response=json.dumps(json.loads(IGDB().get_all_genres().text)),
                        mimetype='application/json', 
                        status=200,
                        headers={'Access-Control-Allow-Origin': '*'})
    except Exception as ex:
        logger.error(ex)
        raise ex
