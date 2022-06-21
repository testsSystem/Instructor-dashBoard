const API_ROOT = "https://logietestapi.herokuapp.com/api/v1";

const API_URLS = (extraData) => ({
  // the extraData can be used to send url params and request query data if needed to api.
  ROOT: API_ROOT,
  AUTH: {
    LOGIN: API_ROOT + "/instructors/login/",
    SIGNUP: API_ROOT + "/instructors/signup/",
    LOGOUT: API_ROOT + "/instructors/logout/",
  },
  TESTS: {
    CREATE_TEST: API_ROOT + "/tests/",
    CREATE_QUESTION: API_ROOT + "/tests/questions/",
    CREATE_ANSWERS: API_ROOT + "/tests/options/",
    ALL_TESTS: API_ROOT + "/tests",
    STUDENT_TEST: API_ROOT + "/tests/getStudentTest/" + extraData,
    INSTRUCTRO_TEST: API_ROOT + "/tests/getInstructorTest/" + extraData,
  },
  INSTRUCTORS: {
    GET_STUDENTS: API_ROOT + "/instructors/getStudents",
  },
  SESSIONS: {
    CREATE_SESSION: API_ROOT + "/tests/session",
  },
  EXPIREMENT: {
    CHECKING_ANSWERS: API_ROOT + "/tests/ckeckCorrect",
    CORRECT_ANSWRE: API_ROOT + "/tests/correctAnswers/" + extraData,
  },
});

export default API_URLS;
