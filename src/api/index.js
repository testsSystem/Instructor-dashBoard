const API_ROOT = "http://localhost:3000/api/v1";

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
  },
  INSTRUCTORS: {
    GET_STUDENTS: API_ROOT + "/instructors/getStudents",
  },
});

export default API_URLS;
