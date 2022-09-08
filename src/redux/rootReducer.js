import { combineReducers } from "redux";
import companiesReducer from "./companies/companiesReducer";
import itemsReducer from "./items/itemsReducer";
import tagsReducer from "./tags/tagsReducer";
import basketReducer from "./basket/basketReducer";

const appReducer = combineReducers({
  companies: companiesReducer,
  items: itemsReducer,
  tags:tagsReducer,
  basket:basketReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "RESET_STORE") {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export default rootReducer;