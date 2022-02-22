import { combineReducers } from "redux";
import authReducer from "./authReducer";
import goalsReducer from "./goalsReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  goals: goalsReducer,
});

export default rootReducer;
