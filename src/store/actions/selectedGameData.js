import * as actionTypes from './actionTypes'

export const update_selected_game = (value) => {
    return {
        type: actionTypes.UPDATE_SELECTED_GAME,
        val: value 
    };
};

export const update_selected_game_id = (value) => {
    return {
        type: actionTypes.UPDATE_SELECTED_GAME_ID,
        val: value 
    };
};