import json
import requests
import logging
from game_searcher_api.config import IGDB_URI, SECRET_KEY

class IGDB():

    def get_all_games(self, offset, rating, genre, after_date):
        url = '{}/{}'.format(IGDB_URI, 'games')
        logging.info('Making a request to get all games with url: {}'.format(url))

        data_string = 'fields *; limit 8; offset {}; where rating > {} {} {}' .format(
            offset, rating, '& genres=({}) '.format(int(genre)) if int(genre) !=0 else ';', 
                '& first_release_date > {};'.format(int(after_date)) if int(after_date) != 0 else ';')

        logging.debug('Using data for request to get all games: {}'.format(data_string))

        # Free tier has a maximum of 10 items per list for retrieving screenshots, so it
        # limits the amount of games I can retrieve
        response = requests.post(url, headers={'user-key': SECRET_KEY}, 
                                data=data_string)
        response.raise_for_status()

        logging.info('Request status code: {}.'.format(response.status_code))
        return response
    
    def get_game_by_id(self, id):
        url = '{}/{}'.format(IGDB_URI, 'games')
        logging.info('Making a request to get all games with url: {}'.format(url))

        data_string = 'fields *; where id = ({});'.format(id)

        logging.debug('Using data for request to get game by id: {}'.format(data_string))

        response = requests.post(url, headers={'user-key': SECRET_KEY}, 
                                data=data_string)
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

        # A one item tuple is of the format (item,) which fails IGDB's query checking. 
        refactored_array_ids = array_ids_for_game if len(array_ids_for_game) != 1 else str(array_ids_for_game).replace(",", "")

        response = requests.post(url, headers={'user-key': SECRET_KEY}, 
                                 data='fields *; limit 50; where game = {};'
                                      .format(refactored_array_ids))
        response.raise_for_status()

        logging.info('Request status code: {}.'.format(response.status_code))
        return response
