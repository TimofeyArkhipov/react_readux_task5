import { FETCH_GIST_SUCCESS, GIT_INFO } from "../actions/actionsGitInfo";

let fetchSelectedObj = {
    selectedGits: {},
    language: null,
    item: null,
}

export default function infoGitReducer(state = fetchSelectedObj, action) {
    switch(action.type) {
        case FETCH_GIST_SUCCESS:
            return {
                ...state,
                loading: false,
                item: action.payload,
            };
        case GIT_INFO:
            return {
                ...state,
                selectedGits: action.id,
            }
        default: return state;
    }
}
