import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    genre: 13,
    offsetValue: 0
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_GENRE:
            return updateObject(state, {genre: action.val})
        case actionTypes.UPDATE_OFFSET_VALUE:
            return updateObject(state, {offsetValue: action.val})
    }
    return state;
};

export default reducer;