import {
    SET_ITEMS,
    SET_ITEMS_GET_REQUEST_LOADING,
    SET_ITEMS_GET_REQUEST_SUCCESS,
    SET_ITEMS_GET_REQUEST_ERROR,
  } from "./itemsActionTypes";
  
  const initialState = {
    items: [],
    itemsGetRequestLoading: false,
    itemsGetRequestSuccess: false,
    itemsGetRequestError: false,
    itemsGetRequestErrorMessage: "",
  };
  
  const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_ITEMS:
        return {
          ...state,
          items: action.payload,
        };
  
      case SET_ITEMS_GET_REQUEST_LOADING:
        return {
          ...state,
          itemsGetRequestLoading: true,
          itemsGetRequestSuccess: false,
          itemsGetRequestError: false,
          itemsGetRequestErrorMessage: "",
        };
  
      case SET_ITEMS_GET_REQUEST_SUCCESS:
        return {
          ...state,
          itemsGetRequestLoading: false,
          itemsGetRequestSuccess: true,
          itemsGetRequestError: false,
          itemsGetRequestErrorMessage: "",
          items: action.payload,
        };
  
      case SET_ITEMS_GET_REQUEST_ERROR:
        return {
          ...state,
          itemsGetRequestLoading: false,
          itemsGetRequestSuccess: false,
          itemsGetRequestError: true,
          itemsGetRequestErrorMessage: action.payload,
        };
      default:
        return state;
    }
  };
  export default itemsReducer;
  