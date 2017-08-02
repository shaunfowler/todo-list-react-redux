import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
    switch (action.type) {
        case types.CREATE_ITEM:
            return [
                ...state,
                Object.assign({}, action.item)
            ];
        case types.LOAD_ITEMS_SUCCESS:
            return action.items;
        default:
            return state;
    }
}
