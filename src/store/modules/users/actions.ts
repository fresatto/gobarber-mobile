export function loginRequest(email: string, password: string) {
  return {
    type: "@users/LOGIN_REQUEST",
    payload: {
      email,
      password,
    },
  };
}

export function loginSuccess(token: string) {
  return {
    type: "@users/LOGIN_SUCCESS",
    payload: {
      token,
    },
  };
}
