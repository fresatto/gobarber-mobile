import { Reducer } from "react";
import produce from "immer";

export interface AuthState {
  token: string | null;
  loading: boolean;
  logged: boolean;
}

const INITIAL_STATE: AuthState = {
  logged: false,
  loading: false,
  token: null,
};

export const auth: Reducer<AuthState, { type: string; payload: any }> = (
  state = INITIAL_STATE,
  action
) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@auth/LOGIN_REQUEST": {
        draft.loading = true;
        break;
      }
      case "@auth/LOGIN_SUCCESS": {
        draft.loading = false;
        draft.logged = true;
        draft.token = action.payload.token;
        break;
      }
      case "@auth/SIGN_UP_REQUEST": {
        draft.loading = true;
        break;
      }
      case "@auth/SIGN_UP_SUCCESS": {
        draft.loading = false;
        break;
      }
      case "@auth/SIGN_OUT": {
        draft.logged = false;
        draft.token = null;
        break;
      }
      case "@auth/REQUEST_ERROR": {
        draft.loading = false;
        break;
      }
      default:
        return draft;
    }
  });
};

export default auth;
