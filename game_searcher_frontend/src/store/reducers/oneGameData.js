import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    selectedGame: []
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.UPDATE_SELECTED_GAME:
            return updateObject(state, {selectedGame: action.val})
    }
    return state;
};

export default reducer;