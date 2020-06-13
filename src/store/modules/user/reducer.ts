import { Reducer } from "redux";
import produce from "immer";

export interface UserProps {
  name: string;
  email: string;
  avatar: {
    url: string;
  };
}

export interface UserState {
  profile: UserProps | null;
  loading: boolean;
  error: boolean;
}

const INITIAL_STATE: UserState = {
  profile: null,
  loading: false,
  error: false,
};

const user: Reducer = (state = INITIAL_STATE, action) => {
  return produce(state, (draft: typeof INITIAL_STATE) => {
    switch (action.type) {
      case "@auth/LOGIN_SUCCESS": {
        draft.profile = action.payload.user;
        break;
      }
      case "@user/UPDATE_REQUEST": {
        draft.loading = true;
        break;
      }
      case "@user/UPDATE_SUCCESS": {
        draft.loading = false;
        draft.profile = action.payload.user;
        break;
      }
      case "@user/REQUEST_ERROR": {
        draft.loading = false;
        draft.error = true;
        break;
      }
      default:
    }
  });
};

export default user;
