import { CREATE_TEST, FETCH_TESTS } from "../constants";

let initialState = {
  tests: [],
  test: {},
};

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TEST:
      return {
        ...state,
      };
    case FETCH_TESTS:
      return {
        ...state,
        test: action.payload,
      };
    default:
      return state;
  }
};

export default testReducer;
