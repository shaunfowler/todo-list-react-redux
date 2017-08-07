import axios from 'axios';
import * as types from './actionTypes';

export function createItemSuccess(item) {
    return {type: types.CREATE_ITEM_SUCCESS, item};
}

export function loadItemsSuccess(items) {
    return {type: types.LOAD_ITEMS_SUCCESS, items};
}

export function deleteItemSuccess(itemId) {
    return {type: types.DELETE_ITEM_SUCCESS, itemId};
}

export function loadItems() {
    return dispatch => axios.get('http://5981fe84139db000114a2df3.mockapi.io/items').then((response) => {
        dispatch(loadItemsSuccess(response.data));
    }).catch((error) => {
        throw error;
    });
}

export function createItem(item) {
    return dispatch => axios.post('http://5981fe84139db000114a2df3.mockapi.io/items', item).then((response) => {
        dispatch(createItemSuccess(response.data));
    }).catch((error) => {
        throw error;
    });
}

export function deleteItem(itemId) {
    return dispatch => axios.delete(`http://5981fe84139db000114a2df3.mockapi.io/items/${itemId}`).then(() => {
        dispatch(deleteItemSuccess(itemId));
    }).catch((error) => {
        throw error;
    });
}
