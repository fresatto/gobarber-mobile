import { UserResponseProps } from ".";

export function loginRequest(email: string, password: string) {
  return {
    type: "@users/LOGIN_REQUEST",
    payload: {
      email,
      password,
    },
  };
}

export function loginSuccess(token: string, user: UserResponseProps) {
  return {
    type: "@users/LOGIN_SUCCESS",
    payload: {
      user,
      token,
    },
  };
}

export function signUpRequest(name: string, email: string, password: string) {
  return {
    type: "@users/SIGN_UP_REQUEST",
    payload: {
      name,
      email,
      password,
    },
  };
}

export function signUpSuccess(name: string, email: string) {
  return {
    type: "@users/SIGN_UP_SUCCESS",
    payload: {
      name,
      email,
    },
  };
}
