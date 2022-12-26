import { all } from "redux-saga/effects";

import { watchRepo } from "./sagaGitHub";

export function* rootWatcher() {
  yield all([watchRepo()]);
}
