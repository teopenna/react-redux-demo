import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) {
    const actionFunctions = {
        [types.LOAD_COURSES_SUCCESS]: function() {
            return action.courses;
        },
        'default': function() {
            return state;
        }
    };

    return (actionFunctions[action.type] || actionFunctions['default'])();
}