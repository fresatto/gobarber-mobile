import { all } from "redux-saga/effects";

import users from "./users/sagas";

export default function* rootSagas() {
  return yield all([users]);
}
