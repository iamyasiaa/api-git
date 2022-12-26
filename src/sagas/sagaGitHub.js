import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import {
  GET_LIST_REPO,
  GET_REPO,
  setListRepo,
  setRepo,
} from "../actions/actionRepo";

function* workerGetListRepo() {
  try {
    const response = yield axios.get("https://api.github.com/events", {
      params: {
        per_page: 25,
      },
    });

    yield put(setListRepo(response.data));
  } catch (e) {
    console.log(e);
  }
}

function* workerGetRepo({ payload }) {
  try {
    const response = yield axios.get(
      `https://api.github.com/users/${payload}/events/public`
    );

    yield put(setRepo(response.data));
  } catch (e) {
    console.log(e);
  }
}

export function* watchRepo() {
  yield takeEvery(GET_LIST_REPO, workerGetListRepo);
  yield takeEvery(GET_REPO, workerGetRepo);
}
