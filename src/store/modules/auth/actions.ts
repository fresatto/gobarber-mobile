import { UserProps } from "../user/reducer";

export function loginRequest(email: string, password: string) {
  return {
    type: "@auth/LOGIN_REQUEST",
    payload: {
      email,
      password,
    },
  };
}

export function loginSuccess(token: string, user: UserProps) {
  return {
    type: "@auth/LOGIN_SUCCESS",
    payload: {
      token,
      user,
    },
  };
}

export function signUpRequest(name: string, email: string, password: string) {
  return {
    type: "@auth/SIGN_UP_REQUEST",
    payload: {
      name,
      email,
      password,
    },
  };
}

export function signUpSuccess(name: string, email: string) {
  return {
    type: "@auth/SIGN_UP_SUCCESS",
    payload: {
      name,
      email,
    },
  };
}

export function authRequestError() {
  return {
    type: "@auth/REQUEST_ERROR",
  };
}

export function signOut() {
  return {
    type: "@auth/SIGN_OUT",
  };
}
