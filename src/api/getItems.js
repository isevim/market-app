// Redux
import store from "../redux/store.js";
import {
  setItemsGetRequestError,
  setItemsGetRequestLoading,
  setItemsGetRequestSuccess,

  setTags
} from "../redux/index.js";

const itemsResponseData = require("./items.json");

export default function getItems() {
  return new Promise((resolve, reject) => {
    store.dispatch(setItemsGetRequestLoading);

    if (itemsResponseData) {
      store.dispatch(setItemsGetRequestSuccess(itemsResponseData));

      // Set Tags to Redux
      let tagsArray = []
      itemsResponseData?.forEach(element => {
        element?.tags.forEach(tags => {
          tagsArray.push(tags)
        })
      })
      const uniqueItemsResponseData = [...new Set(tagsArray)]

      store.dispatch(setTags(uniqueItemsResponseData));

    } else {
      store.dispatch(setItemsGetRequestError);
    }
  });
}
