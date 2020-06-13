import { all, call, put, takeLatest } from "redux-saga/effects";
import api from "../../../services/api";
import { Alert } from "react-native";
import { updateUserSuccess, userRequestFail } from "./actions";

interface UpdateUserRequest {
  type: string;
  payload: {
    name: string;
    email: string;
    oldPassword: string;
    password: string;
    confirmPassword: string;
  };
}

function* updateUser({ payload }: UpdateUserRequest) {
  try {
    const { name, email, password } = payload;

    const { data } = yield call(
      api.put,
      "/users",
      password ? { ...payload } : { name, email }
    );

    yield put(updateUserSuccess(data));
    Alert.alert("Sucesso", "Perfil atualizado com sucesso!");
  } catch {
    yield put(userRequestFail());
    Alert.alert(
      "Erro",
      "Não foi possível atualizar o seu perfil, verifique os campos e tente novamente."
    );
  }
}

export default all([takeLatest("@user/UPDATE_REQUEST", updateUser)]);
