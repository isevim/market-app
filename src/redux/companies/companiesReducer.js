import {
    SET_COMPANIES,
    SET_COMPANIES_GET_REQUEST_LOADING,
    SET_COMPANIES_GET_REQUEST_SUCCESS,
    SET_COMPANIES_GET_REQUEST_ERROR,
  } from "./companiesActionTypes";
  
  const initialState = {
    companies: [],
    companiesGetRequestLoading: false,
    companiesGetRequestSuccess: false,
    companiesGetRequestError: false,
    companiesGetRequestErrorMessage: "",
  };
  
  const companiesReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_COMPANIES:
        return {
          ...state,
          companies: action.payload,
        };
  
      case SET_COMPANIES_GET_REQUEST_LOADING:
        return {
          ...state,
          companiesGetRequestLoading: true,
          companiesGetRequestSuccess: false,
          companiesGetRequestError: false,
          companiesGetRequestErrorMessage: "",
        };
  
      case SET_COMPANIES_GET_REQUEST_SUCCESS:
        return {
          ...state,
          companiesGetRequestLoading: false,
          companiesGetRequestSuccess: true,
          companiesGetRequestError: false,
          companiesGetRequestErrorMessage: "",
          companies: action.payload,
        };
  
      case SET_COMPANIES_GET_REQUEST_ERROR:
        return {
          ...state,
          companiesGetRequestLoading: false,
          companiesGetRequestSuccess: false,
          companiesGetRequestError: true,
          companiesGetRequestErrorMessage: action.payload,
        };
      default:
        return state;
    }
  };
  export default companiesReducer;
  