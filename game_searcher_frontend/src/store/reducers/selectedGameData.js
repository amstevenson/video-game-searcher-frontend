import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    selectedGame: [],
    selectedGameId: 0
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.UPDATE_SELECTED_GAME:
            return updateObject(state, {selectedGame: action.val})
        case actionTypes.UPDATE_SELECTED_GAME_ID:
            return updateObject(state, {selectedGameId: action.val})
        default:
            break;
    }
    return state;
};

export default reducer;