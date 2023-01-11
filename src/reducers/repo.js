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
  repoList: {
    data: [],
    loading: false,
  },
  eventsList: {
    data: [],
    loading: false,
  },
  timer: false,
};

export default function repo(state = defaultState, action) {
  switch (action.type) {
    case SET_LIST_REPO:
      return {
        ...state,
        repoList: {
          data: action.payload,
          loading: false,
        },
        timer: true,
      };
    case CLEAR_LOADING_EVENT:
      return {
        ...state,
        eventsList: {
          ...state.eventsList,
          loading: false,
        },
      };
    case GET_REPO:
      return {
        ...state,
        eventsList: {
          ...state.eventsList,
          loading: true,
        },
      };
    case GET_LIST_REPO:
      return {
        ...state,
        repoList: {
          ...state.repoList,
          loading: true,
        },
      };
    case CLEAR_TIMER:
      return {
        ...state,
        timer: false,
      };
    case CLEAR_LOADING_REPO:
      return {
        ...state,
        repoList: {
          ...state.repoList,
          loading: false,
        },
      };
    case SET_REPO:
      return {
        ...state,
        eventsList: {
          data: action.payload,
          loading: false,
        },
      };
    default:
      return state;
  }
}
