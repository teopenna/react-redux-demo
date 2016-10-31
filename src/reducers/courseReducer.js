import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
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