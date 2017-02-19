import * as types from '../actions/actionTypes';
import initialState from './initialState';

function actionTypeEndsInSuccess(type) {
    return type.substring(type.length - 8) === '_SUCCESS';
}

export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action) {
    const actionFunctions = {
        [types.BEGIN_AJAX_CALL]: function() {
            return state + 1;
        },
        'actionTypeEndsInSuccess': function() {
            return state - 1;
        },
        'default': function() {
            return state;
        }
    };
    
    if (actionTypeEndsInSuccess(action.type)) {
        return actionFunctions['actionTypeEndsInSuccess'];
    }
    return (actionFunctions[action.type] || actionFunctions['default'])();
}