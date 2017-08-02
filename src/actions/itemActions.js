import axios from 'axios';
import * as types from './actionTypes';

export function createItem(item) {
    return {type: types.CREATE_ITEM, item};
}

export function loadItemsSuccess(items) {
    return {type: types.LOAD_ITEMS_SUCCESS, items};
}

export function loadItems() {
    return dispatch => axios.get('http://5981fe84139db000114a2df3.mockapi.io/items').then((items) => {
        dispatch(loadItemsSuccess(items.data));
    }).catch((error) => {
        throw error;
    });
}
