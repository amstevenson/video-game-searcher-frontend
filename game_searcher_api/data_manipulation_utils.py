from service.igdb import IGDB
import time
import json

def get_all_genres_dict(all_genres_json):
    """
    Convert an array of json objects into a hashmap for easy lookup for genre values
    """
    genre_dict = {}
    for genre in all_genres_json:
        genre_dict[genre['id']] = genre['name']

    return genre_dict

def get_game_ids(igdb_game_json, all_genres_dict):

    return tuple(game['id'] for game in igdb_game_json)

def get_genres_and_screenshots(igdb_game_json):
    idgb_service = IGDB()

    # Get all Genres. The result of the games search has each genre as an ID; so we need the right name value.
    all_genres = idgb_service.get_all_genres()

    # All genres comes back as an array of json objects, which doesn't make it too easy to 
    # add the name value to the games list as we go back through, so we need an easier way of doing that
    all_genres_dict = get_all_genres_dict(json.loads(all_genres.text))

    # Each game comes back with a list of screenshots, however, these all come back as Id's too. 
    # So we need to make a list of game ID's to send across in another request in order to get the 
    # list of image id url's.
    #
    # Whilst looping through to get these URL's we can also add the genre names above. 
    #
    game_ids = get_game_ids(igdb_game_json, all_genres_dict)

    # With the Game ID's, get the screenshots with yet another call to IGDB
    # Note: IGDB need the games to be a tuple list
    all_game_screenshots = json.loads(idgb_service.get_all_screenshots(game_ids).text)

    return all_genres_dict, all_game_screenshots

def add_genres_and_screenshots_to_games_list(all_genres_dict, all_game_screenshots, igdb_game_json):
    for game in igdb_game_json:
        
        # Add a dict of genre names for json object
        game['genre_names'] = [all_genres_dict[genre_id] for genre_id in game['genres']]

        for screenshot in all_game_screenshots:
            if screenshot['game'] == game['id']:
                if 'screenshot_info' in game:
                    game['screenshot_info'].append(screenshot)
                else: 
                    game['screenshot_info'] = [screenshot]

def convert_igdb_json_to_usable_format(igdb_game_json):
    """
    Modify the list of games coming back from idgb to include information about genre name
    and screenshots (the url, name, width and height etc)

    Modifications to retrieved game list are made to the mutable list that is passed through
    as the first parameter. 
    """
    all_genres_dict, all_game_screenshots = get_genres_and_screenshots(igdb_game_json)

    add_genres_and_screenshots_to_games_list(all_genres_dict, all_game_screenshots, igdb_game_json)

    return igdb_game_json
