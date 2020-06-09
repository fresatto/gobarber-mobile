import { all, put, takeLatest, call } from "redux-saga/effects";

import { loginSuccess } from "./actions";

import api from "../../../services/api";

interface LoginRequest {
  type: string;
  payload: {
    email: string;
    password: string;
  };
}

function* login({ payload }: LoginRequest) {
  const { email, password } = payload;

  try {
    const { data } = yield call(api.post, "/sessions", {
      email: "renanfresatto@gmail.com",
      password: "12345678",
    });

    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

export default all([takeLatest("@users/LOGIN_REQUEST", login)]);
