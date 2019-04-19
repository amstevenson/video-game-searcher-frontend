import json
import requests
import logging
from game_searcher_api.config import IGDB_URI, SECRET_KEY

class IGDB():

    def get_all_games(self, offset):
        url = '{}/{}'.format(IGDB_URI, 'games')
        logging.info('Making a request to get all games with url: {}'.format(url))

        response = requests.post(url, headers={'user-key': SECRET_KEY}, 
                                data='fields *; limit 20; offset {};'.format(offset))
        logging.info('Request status code: {}.'.format(response.status_code))
        return response
        