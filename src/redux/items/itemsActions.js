import {
    SET_ITEMS,
    SET_ITEMS_GET_REQUEST_LOADING,
    SET_ITEMS_GET_REQUEST_SUCCESS,
    SET_ITEMS_GET_REQUEST_ERROR,
  } from "./itemsActionTypes";
  
  export const setItems = (items) => ({
    type: SET_ITEMS,
    payload: items,
  });
  
  export const setItemsGetRequestLoading = () => ({
    type: SET_ITEMS_GET_REQUEST_LOADING,
  });
  
  export const setItemsGetRequestSuccess = (data) => ({
    type: SET_ITEMS_GET_REQUEST_SUCCESS,
    payload: data,
  });
  
  export const setItemsGetRequestError = (error) => ({
    type: SET_ITEMS_GET_REQUEST_ERROR,
    payload: error,
  });
  