import {
    SET_BASKET,
} from "./basketActionTypes";

export const setBasket = (items) => ({
    type: SET_BASKET,
    payload: items,
});

