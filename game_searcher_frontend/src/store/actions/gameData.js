import * as actionTypes from './actionTypes'

export const add_genre = (value) => {
    return {
        type: actionTypes.ADD_GENRE,
        val: value
    };
};

export const update_offset = (value) => {
    return {
        type: actionTypes.UPDATE_OFFSET,
        val: value
    };
};

export const update_games_loading = (value) => {
    return {
        type: actionTypes.UPDATE_GAMES_LOADING,
        val: value
    };
};

export const update_rating = (value) => {
    return {
        type: actionTypes.UPDATE_RATING,
        val: value
    };
};

export const update_search_toggle = (value) => {
    return {
        type: actionTypes.UPDATE_SEARCH_TOGGLE,
        val: value 
    };
};

export const update_after_date = (value) => {
    return {
        type: actionTypes.UPDATE_AFTER_DATE,
        val: value 
    };
};

export const update_genre_list = (value) => {
    return {
        type: actionTypes.UPDATE_GENRE_LIST,
        val: value 
    };
};

export const update_game_list = (value) => {
    return {
        type: actionTypes.UPDATE_GAME_LIST,
        val: value 
    };
};