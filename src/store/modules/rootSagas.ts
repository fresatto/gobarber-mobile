import { all } from "redux-saga/effects";

import users from "./auth/sagas";

export default function* rootSagas() {
  return yield all([users]);
}
