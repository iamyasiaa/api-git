import {
  CLEAR_LOADING_EVENT,
  CLEAR_LOADING_REPO,
  CLEAR_TIMER,
  GET_LIST_REPO,
  GET_REPO,
  SET_LIST_REPO,
  SET_REPO,
} from "../actions/actionRepo";

const defaultState = {
  listRepo: [],
  listEvent: [],
  timer: false,
  isLoadingRepo: false,
  isLoadingEvent: false,
};

export default function repo(state = defaultState, action) {
  switch (action.type) {
    case SET_LIST_REPO:
      return {
        ...state,
        listRepo: action.payload,
        isLoadingRepo: false,
        timer: true,
      };
    case CLEAR_LOADING_EVENT:
      return {
        ...state,
        isLoadingEvent: false,
      };
    case GET_REPO:
      return {
        ...state,
        isLoadingEvent: true,
      };
    case GET_LIST_REPO:
      return {
        ...state,
        isLoadingRepo: true,
      };
    case CLEAR_TIMER:
      return {
        ...state,
        timer: false,
      };
    case CLEAR_LOADING_REPO:
      return {
        ...state,
        isLoadingRepo: false,
      };
    case SET_REPO:
      return {
        ...state,
        isLoadingEvent: false,
        listEvent: action.payload,
      };
    default:
      return state;
  }
}
