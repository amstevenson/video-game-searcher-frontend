"""
This is separate to the course, basically put in to show ORM
"""
from flask import Blueprint, Response, request
from game_searcher_api.service.igdb import IGDB
import json
import logging

game = Blueprint('game', __name__)

logger = logging.getLogger()

@game.route("/games/<offset>", methods=["GET", "OPTIONSs"])
def all_games(offset):
    try:
        return Response(response=json.dumps(IGDB().get_all_games(offset).text),
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
