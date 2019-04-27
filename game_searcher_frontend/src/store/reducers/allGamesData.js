import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    genre: 13,
    offset: 0,
    gamesLoading: true,
    rating: 70,
    searchToggle: false,
    afterDate: 0,
    genreList: [],
    gameList: []
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_GENRE:
            return updateObject(state, {genre: action.val})
        case actionTypes.UPDATE_OFFSET:
            return updateObject(state, {offset: action.val})
        case actionTypes.UPDATE_GAMES_LOADING:
            return updateObject(state, {gamesLoading: action.val})
        case actionTypes.UPDATE_RATING:
            return updateObject(state, {rating: action.val})
        case actionTypes.UPDATE_SEARCH_TOGGLE:
            return updateObject(state, {searchToggle: !action.val}) // opposite to trigger refresh
        case actionTypes.UPDATE_AFTER_DATE:
            return updateObject(state, {afterDate: Math.floor((new Date(action.val)).getTime() / 1000)})
        case actionTypes.UPDATE_GENRE_LIST:
            return updateObject(state, {genreList: action.val})
        case actionTypes.UPDATE_GAME_LIST:
            return updateObject(state, {gameList: action.val})
    }
    return state;
};

export default reducer;