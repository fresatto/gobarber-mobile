import { combineReducers } from "redux";

import auth, { AuthState } from "./auth/reducer";
import user, { UserState } from "./user/reducer";

export interface ApplicationState {
  auth: AuthState;
  user: UserState;
}

const reducers = combineReducers({
  auth,
  user,
});

export default reducers;
