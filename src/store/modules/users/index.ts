import { Reducer } from "react";
import produce from "immer";

export interface UserState {
  user: null;
  token: string;
  loading: boolean;
  logged: boolean;
}

const INITIAL_STATE: UserState = {
  user: null,
  token: "token gabrielzinho",
  logged: false,
  loading: false,
};

export const users: Reducer<UserState, { type: string; payload: any }> = (
  state = INITIAL_STATE,
  action
) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@users/SESSION_REQUEST": {
        draft.loading = true;
      }
      case "@users/SESSION_SUCCESS": {
        draft.loading = false;
        draft.token = action.payload.token;
      }
      default:
    }
  });
};

export default users;
