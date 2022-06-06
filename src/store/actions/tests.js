import { FETCH_TODO, CREATE_TODO } from "../constants";
import API_URLS from "../../api";
import { requestApi } from "../../helpers/index.js";
import Answers from "layouts/Test/componentsShared/Answers";

export const postTestAction = (testData) => async (dispatch) => {
  let { testName, startAt, endAt, description, questions } = testData;
  console.log({ testName, startAt, endAt, description, questions });
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
  await requestApi(testInfo)
    .then((res) => {
      // initialize variable test id from response
      let testId = res.data.result.id;
      // map over questions
      questions.map(async (question) => {
        // initialize the questionsInfo object to be used in the api call
        let questionsInfo = {
          url: API_URLS().TESTS.CREATE_QUESTION,
          body: {
            questoin: question.name,
            test_id: testId,
          },
          method: "POST",
        };
        // call the requestApi and pass in the questionsInfo as an argument
        await requestApi(questionsInfo).then(async (res) => {
          // add .then after the api call
          // initialize variable question id from response
          let questionId = res.data.result.id;
          // map over question.answers to add the question id inside each object
          let updatedAnswers = question.answers.map((ans) => {
            let { correct, answer } = ans;
            return { correct_answer: correct, answer, question_id: questionId };
          });
          // initialize the answersInfo object to be used in the api call
          let answersInfo = {
            url: API_URLS().TESTS.CREATE_ANSWERS,
            body: updatedAnswers,
            method: "POST",
          };
          // call the requestApi and pass in the answersInfo as an argument
          const answersResponse = await requestApi(answersInfo);
        });
      });
    })
    .catch((e) => console.error(e));
};
