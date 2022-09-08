import {
    SET_COMPANIES,
    SET_COMPANIES_GET_REQUEST_LOADING,
    SET_COMPANIES_GET_REQUEST_SUCCESS,
    SET_COMPANIES_GET_REQUEST_ERROR,
  } from "./companiesActionTypes";
  
  export const setCompanies = (companies) => ({
    type: SET_COMPANIES,
    payload: companies,
  });
  
  export const setCompaniesGetRequestLoading = () => ({
    type: SET_COMPANIES_GET_REQUEST_LOADING,
  });
  
  export const setCompaniesGetRequestSuccess = (data) => ({
    type: SET_COMPANIES_GET_REQUEST_SUCCESS,
    payload: data,
  });
  
  export const setCompaniesGetRequestError = (error) => ({
    type: SET_COMPANIES_GET_REQUEST_ERROR,
    payload: error,
  });
  