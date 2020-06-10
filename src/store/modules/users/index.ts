import { Reducer } from "react";
import produce from "immer";

export interface UserResponseProps {
  name: string;
  email: string;
  avatar: {
    url: string;
  };
}

export interface UserState {
  user: UserResponseProps | null;
  token: string | null;
  loading: boolean;
  logged: boolean;
}

const INITIAL_STATE: UserState = {
  user: null,
  logged: false,
  loading: false,
  token: null,
};

export const users: Reducer<UserState, { type: string; payload: any }> = (
  state = INITIAL_STATE,
  action
) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@users/LOGIN_REQUEST": {
        draft.loading = true;
      }
      case "@users/LOGIN_SUCCESS": {
        draft.loading = false;
        draft.token = action.payload.token;
      }
      case "@users/SIGN_UP_REQUEST": {
        draft.loading = true;
      }
      case "@users/SIGN_UP_SUCCESS": {
        draft.loading = false;
      }
      default:
        return draft;
    }
  });
};

export default users;
