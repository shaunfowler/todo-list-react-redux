import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.items, action) {
    switch (action.type) {
        case types.CREATE_ITEM_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.item)
            ];
        case types.LOAD_ITEMS_SUCCESS:
            return action.items;
        case types.DELETE_ITEM_SUCCESS:
            return [...state.filter(s => s.id !== action.itemId)];
        default:
            return state;
    }
}
