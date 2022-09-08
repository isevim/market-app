import {
    SET_TAGS,
} from "./tagsActionType";

const initialState = {
    tags: []
};

const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TAGS:
            return {
                ...state,
                tags: action.payload,
            };

        default:
            return state;
    }
};
export default itemsReducer;
