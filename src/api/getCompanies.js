// Redux
import store from "../redux/store.js";
import {
  setCompaniesGetRequestError,
  setCompaniesGetRequestLoading,
  setCompaniesGetRequestSuccess,
} from "../redux/index.js";

const companiesResponseData = require("./companies.json");

export default function getCompanies() {
  return new Promise((resolve, reject) => {
    store.dispatch(setCompaniesGetRequestLoading);

    if (companiesResponseData) {
      store.dispatch(setCompaniesGetRequestSuccess(companiesResponseData));
    } else {
      store.dispatch(setCompaniesGetRequestError);
    }
  });
}
