import {
    SET_TAGS,
} from "./tagsActionType";

export const setTags = (items) => ({
    type: SET_TAGS,
    payload: items,
});

