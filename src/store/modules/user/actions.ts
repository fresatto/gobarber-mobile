import { UserProps } from "./reducer";

export function updateUserRequest(
  name: string,
  email: string,
  oldPassword: string,
  password: string,
  confirmPassword: string
) {
  return {
    type: "@user/UPDATE_REQUEST",
    payload: {
      name,
      email,
      oldPassword,
      password,
      confirmPassword,
    },
  };
}

export function updateUserSuccess(user: UserProps) {
  return {
    type: "@user/UPDATE_SUCCESS",
    payload: {
      user,
    },
  };
}

export function userRequestFail() {
  return {
    type: "@user/REQUEST_ERROR",
  };
}
