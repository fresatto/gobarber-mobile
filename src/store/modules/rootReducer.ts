import { combineReducers } from "redux";

import { users, UserState } from "./users";

export interface ApplicationState {
  users: UserState;
}

const reducers = combineReducers({
  users,
});

export default reducers;
