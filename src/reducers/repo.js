import { SET_LIST_REPO, SET_REPO } from "../actions/actionRepo";

const defaultState = {
  listRepo: [],
  listEvent: [],
};

export default function repo(state = defaultState, action) {
  switch (action.type) {
    case SET_LIST_REPO:
      return {
        ...state,
        listRepo: action.payload,
      };
    case SET_REPO:
      return {
        ...state,
        listEvent: action.payload,
      };
    default:
      return state;
  }
}
