"""
This is separate to the course, basically put in to show ORM
"""
from flask import Blueprint, Response, request
from game_searcher_api.service.igdb import IGDB
from data_manipulation_utils import convert_igdb_json_to_usable_format
import json
import logging

game = Blueprint('game', __name__)

logger = logging.getLogger()

@game.route("/games/<offset>/<rating>", methods=["GET", "OPTIONS"])
def all_games(offset, rating):
    try:
        all_games_json = json.loads(IGDB().get_all_games(offset, rating).text)

        formatted_games = convert_igdb_json_to_usable_format(all_games_json)

        return Response(response=json.dumps(IGDB().get_all_games(offset, rating).text),
                        mimetype='application/json', 
                        status=200,
                        headers={'Access-Control-Allow-Origin': '*',
                                 'Access-Control-Allow-Credentials': 'true',
                                 'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
                                 'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, ' + 
                                    'Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, ' + 
                                    'Access-Control-Request-Headers'})
    except Exception as ex:
        logger.error(ex)
