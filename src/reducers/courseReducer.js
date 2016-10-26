export default function courseReducer(state = [], action) {
    const actionFunctions = {
        'CREATE_COURSE': function() {
            return[...state,
                Object.assign({}, action.course)
            ];
        },
        'default': function() {
            return state;
        }
    };

    return (actionFunctions[action.type] || actionFunctions['default'])();
}