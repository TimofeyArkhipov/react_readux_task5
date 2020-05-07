import { FETCH_GITS_REQUEST, FETCH_GITS_RESPONSE } from "../actions/actionsGits";

let fetchObj = {
    items: [],
}

export default function gitsReducer(state = fetchObj, action) {
    switch(action.type) {
        case FETCH_GITS_REQUEST:
            return {
                ...state,
            };
        case FETCH_GITS_RESPONSE:
            return {
                ...state,
                items: action.payload
            };
        default: return state;
    }
}
