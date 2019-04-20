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

def convert_igdb_json_to_usable_format(igdb_game_json):
    """
    Want

	id				- number
	category		- returned as actual category
	created_at		- returned as actual string date
	genres			- returned as actual category (using /genres/meta to get list)
	name			- string (no manip needed)
	popularity		- number (no manip needed)
	rating			- if present, not on every one
	screenshots 	- as a list, first one used for main page (/screenshots using array of id's)
	summary 		- shown on main page
	storyline		- if present, shown when clicked on
	updated_at 		- return as an actual date string
    url             - return if there (find out more info)

    """

    # Get all Genres. The result of the games search has each genre as an ID; so we need the right name value.
    start_time = time.time()
    all_genres = IGDB().get_all_genres()
    print("--- %s seconds to get all genres ---" % (time.time() - start_time))

    # All genres comes back as an array of json objects, which doesn't make it too easy to 
    # add the name value to the games list as we go back through, so we need an easier way of doing that
    start_time = time.time()
    all_genres_dict = get_all_genres_dict(json.loads(all_genres.text))
    print("--- %s seconds to get all genres as a dict lookup ---" % (time.time() - start_time))

    # Each game comes back with a list of screenshots, however, these all come back as Id's too. 
    # So we need to make a list of game ID's to send across in another request in order to get the 
    # list of image id url's.
    

    return igdb_game_json


