import React, { useEffect, useState } from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import validate from "./validate";
import { useSelector, useDispatch } from "react-redux";
import { postTestAction } from "../../../store/actions/tests";
// import TextField from "@material-ui/core/TextField";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import TextField from "@mui/material/TextField";

import MDButton from "components/MDButton";
import Icon from "@mui/material/Icon";

import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import API_URLS from "../../../api";
import { requestApi } from "../../../helpers";

const StudentTest = () => {
  const [studentTest, setStudentTest] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState([]);

  const fetchStudntTest = async () => {
    let data = {
      url: API_URLS(3).TESTS.STUDENT_TEST,
    };
    await requestApi(data).then((res) => {
      setStudentTest(res.data.result);
    });
  };

  const fetchCorrectAnswer = async () => {
    let data = {
      url: API_URLS(3).TESTS.INSTRUCTRO_TEST,
    };
    await requestApi(data).then((res) => {
      setCorrectAnswer(res.data.result);
    });
  };

  useEffect(() => {
    fetchStudntTest();
    fetchCorrectAnswer();
  }, []);

  console.log(studentTest, "jjjjjjjjjjjjjjjjjjjjjj");
  console.log(studentTest?.Questions, "jjjjjjjjjjjjjjjjjjjjjj");
  console.log(correctAnswer, "bbbbbbbbbbbbbb");
  let correct = [];

  return (
    <DashboardLayout>
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <MDTypography
                    variant="h6"
                    color="white"
                    justifyContent="center"
                  >
                    Session Test
                  </MDTypography>
                </Grid>
              </MDBox>
              <MDBox pt={3}>
                <Grid container>
                  <Grid item sx={12} md={12}>
                    <TextField
                      //   label="Question"
                      variant="standard"
                      fullWidth
                      value={studentTest.title}
                    />
                  </Grid>
                  <Grid item sx={12} md={12}>
                    {/* {console.log(studentTest?.Questions, "mmmmmmmmmmmmmmmmm")} */}
                    {studentTest?.Questions ? (
                      studentTest?.Questions.map((question, i) => {
                        return (
                          <>
                            <TextField
                              label="Question"
                              variant="standard"
                              fullWidth
                              value={question.questoin}
                            />
                            {question.Answers_options.map((options, i) => {
                              return (
                                <>
                                  <TextField
                                    label="option"
                                    variant="standard"
                                    fullWidth
                                    value={options.answer}
                                  />
                                </>
                              );
                            })}
                          </>
                        );
                      })
                    ) : (
                      <p>loading...</p>
                    )}
                  </Grid>
                </Grid>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
};

export default StudentTest;
