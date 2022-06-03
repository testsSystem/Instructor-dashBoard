const validate = (values) => {
  const errors = {};
  if (!values.testName) {
    errors.testName = "Required";
  }
  if (!values.questions || !values.questions.length) {
    errors.questions = { _error: "At least one question must be entered" };
  } else {
    const questionsArrayErrors = [];
    values.questions.forEach((question, questionIndex) => {
      const questionErrors = {};
      if (!question || !question.name) {
        questionErrors.name = "Required";
        questionsArrayErrors[questionIndex] = questionErrors;
      }
      if (question && question.answers && question.answers.length) {
        const answerArrayErrors = [];
        let correctCount = 0;
        question.answers.forEach((answer, AnswerIndex) => {
          if (!answer || !answer.length) {
            answerArrayErrors[AnswerIndex] = "Required";
          }
          answer.correct && correctCount++;
        });
        if (answerArrayErrors.length) {
          questionErrors.answers = answerArrayErrors;
          questionsArrayErrors[questionIndex] = questionErrors;
        }
        if (question.answers.length > 5) {
          if (!questionErrors.answers) {
            questionErrors.answers = [];
          }
          questionErrors.answers._error = "No more than five answers allowed";
          questionsArrayErrors[questionIndex] = questionErrors;
        }
        if (correctCount > 1) {
          questionErrors.answers._error =
            "only one answer option can be marked correct for each question";
        }
      }
    });
    if (questionsArrayErrors.length) {
      errors.questions = questionsArrayErrors;
    }
  }
  return errors;
};

export default validate;
