import json
import requests
import logging
from game_searcher_api.config import IGDB_URI, SECRET_KEY

class IGDB():

    def get_all_games(self, offset, rating):
        url = '{}/{}'.format(IGDB_URI, 'games')
        logging.info('Making a request to get all games with url: {}'.format(url))

        # Free tier has a maximum of 10 items per list for retrieving screenshots.
        response = requests.post(url, headers={'user-key': SECRET_KEY}, 
                                data='fields *; limit 8; offset {}; where rating > {};'
                                     .format(offset, rating))
        response.raise_for_status()

        logging.info('Request status code: {}.'.format(response.status_code))
        return response
    
    def get_all_genres(self):
        url = '{}/{}'.format(IGDB_URI, 'genres')
        logging.info('Making a request to get all genres with url: {}'.format(url))

        response = requests.post(url, headers={'user-key': SECRET_KEY}, 
                                 data='fields id, name; limit 50;')
        response.raise_for_status()

        logging.info('Request status code: {}.'.format(response.status_code))
        return response

    def get_all_screenshots(self, array_ids_for_game):
        url = '{}/{}'.format(IGDB_URI, 'screenshots')
        logging.info('Making a request to get all screenshots with url: {}'.format(url))

        response = requests.post(url, headers={'user-key': SECRET_KEY}, 
                                 data='fields *; limit 50; where game = {};'
                                      .format(array_ids_for_game))
        response.raise_for_status()

        logging.info('Request status code: {}.'.format(response.status_code))
        return response
