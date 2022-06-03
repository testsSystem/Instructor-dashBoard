import { FETCH_TODO, CREATE_TODO } from "../constants";
import API_URLS from "../../api";
import { requestApi } from "../../helpers/index.js";

export const postTestAction = (testData) => async (dispatch) => {
  let { testName, startAt, endAt, description, questions } = testData;
  let testInfo = {
    url: API_URLS().TESTS.CREATE_TEST,
    body: {
      testName,
      startAt,
      endAt,
      description,
    },
    method: "POST",
  };
  const testResponse = await requestApi(testInfo)
    .then((res) => {
      // initialize variable test id from response

      // map over questions
      // questions.map((question)=>)
        // initialize the questionsInfo object to be used in the api call
        // call the requestApi and pass in the questionsInfo as an argument
          // add .then after the api call
            // initialize variable question id from response
            // map over question.answers to add the question id inside each object
            // initialize the answersInfo object to be used in the api call
            // call the requestApi and pass in the answersInfo as an argument
            // add .then after the api call
              // dispatch({ type: FETCH_TODO, payload: response.data?.result?.todos });
    })
    .catch((e) => console.error(e));

};
