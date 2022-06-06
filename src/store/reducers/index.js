import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import testReducer from "./tests";

const reducers = combineReducers({
  form: reduxFormReducer, // mounted under "form"
  test: testReducer,
});

export default reducers;
