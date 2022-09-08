import {
    SET_BASKET,
} from "./basketActionTypes";

const initialState = {
    basket: []
};

const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BASKET:
            return {
                ...state,
                basket: action.payload,
            };

        default:
            return state;
    }
};
export default basketReducer;
