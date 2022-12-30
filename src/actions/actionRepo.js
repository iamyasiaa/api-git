export const GET_LIST_REPO = "GET_LIST_REPO";
export const GET_REPO = "GET_REPO";
export const SET_LIST_REPO = "SET_LIST_REPO";
export const SET_REPO = "SET_REPO";
export const CLEAR_TIMER = "CLEAR_TIMER";
export const CLEAR_LOADING_REPO = "CLEAR_LOADING_REPO";
export const CLEAR_LOADING_EVENT = "CLEAR_LOADING_EVENT";

export const clearLoadingEvent = () => ({ type: CLEAR_LOADING_EVENT });
export const clearLoadingRepo = () => ({ type: CLEAR_LOADING_REPO });
export const clearTimer = () => ({ type: CLEAR_TIMER });
export const setRepo = (data) => ({ type: SET_REPO, payload: data });
export const getRepo = (data) => ({ type: GET_REPO, payload: data });
export const getListRepo = () => ({ type: GET_LIST_REPO });
export const setListRepo = (data) => ({ type: SET_LIST_REPO, payload: data });
