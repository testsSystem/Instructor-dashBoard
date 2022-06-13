import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import notificationReducer from "./notifications";
import testReducer from "./tests";

const reducers = combineReducers({
  form: reduxFormReducer, // mounted under "form"
  test: testReducer,
  test: testReducer,
  notification: notificationReducer,
});

export default reducers;
