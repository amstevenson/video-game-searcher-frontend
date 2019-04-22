import * as actionTypes from './actionTypes'

export const add_genre = (value) => {
    return {
        type: actionTypes.ADD_GENRE,
        val: value
    };
};

export const update_offset_value = (value) => {
    return {
        type: actionTypes.UPDATE_OFFSET_VALUE,
        val: value
    }
}