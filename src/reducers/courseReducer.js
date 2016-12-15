import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) {
    const actionFunctions = {
        [types.LOAD_COURSES_SUCCESS]: function() {
            return action.courses;
        },
        [types.CREATE_COURSE_SUCCESS]: function() {
            return [
                ...state,
                Object.assign({}, action.course)
            ];
        },
        [types.UPDATE_COURSE_SUCCESS]: function() {
            return [
                ...state.filter(course => course.id !== action.course.id),
                Object.assign({}, action.course)
            ];
        },
        'default': function() {
            return state;
        }
    };

    return (actionFunctions[action.type] || actionFunctions['default'])();
}