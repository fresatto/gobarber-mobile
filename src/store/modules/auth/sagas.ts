import { all, put, takeLatest, call, delay } from "redux-saga/effects";

import { loginSuccess, signUpSuccess } from "./actions";

import api from "../../../services/api";
import { Alert } from "react-native";

interface LoginRequest {
  type: string;
  payload: {
    email: string;
    password: string;
  };
}

interface SignUpRequest {
  type: string;
  payload: {
    name: string;
    email: string;
    password: string;
  };
}

function* login({ payload }: LoginRequest) {
  const { email, password } = payload;

  try {
    const { data } = yield call(api.post, "/sessions", {
      email,
      password,
    });

    const { token, user } = data;

    if (user.provider) {
      Alert.alert(
        "Erro no login",
        "O usuário não pode ser prestador de serviços"
      );
      return;
    }

    yield delay(3000);
    yield put(loginSuccess(token, user));
  } catch (err) {
    Alert.alert(
      "Falha na autenticação",
      "Houve um erro no login, verifique seus dados"
    );
  }
}

function* signUp({ payload }: SignUpRequest) {
  const { name, email, password } = payload;
  try {
    const { data } = yield call(api.post, "/users", {
      name,
      email,
      password,
    });

    yield put(signUpSuccess(data.name, data.email));
  } catch (err) {
    Alert.alert(
      "Erro",
      "Não foi possível realizar o cadastro, tente novamente"
    );
  }
}

function setToken(action: any) {
  if (!action.payload) return;

  const { token } = action.payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest("persist/REHYDRATE", setToken),
  takeLatest("@auth/LOGIN_REQUEST", login),
  takeLatest("@auth/SIGN_UP_REQUEST", signUp),
]);
