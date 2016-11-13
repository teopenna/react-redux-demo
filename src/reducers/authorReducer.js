import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authorReducer(state = initialState.authors, action) {
    const actionFunctions = {
        [types.LOAD_AUTHORS_SUCCESS]: function() {
            return action.authors;
        },
        'default': function() {
            return state;
        }
    };

    return (actionFunctions[action.type] || actionFunctions['default'])();
}