import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import DataTable from "examples/Tables/DataTable";
import Footer from "examples/Footer";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import MDInput from "components/MDInput";
import TextField from "@mui/material/TextField";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import Questions from "./Questions";

import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import { now } from "moment";

// import { Category } from "@mui/icons-material";

function TestData() {
  const [test, setTest] = useState({
    title: "",
    start_at: "",
    end_at: "",
    description: "",
    questions: [
      { question: "what", options: [{ answer: "me", correct_answer: "1" }] },
    ],
  });

  const question = test.questions[0].question;
  const { answer } = test.questions[0].options[0].answer;
  const { correct_answer } = test.questions[0].options[0].correct_answer;
  //   question = "Mousa";

  console.log(question);
  console.log(answer);
  console.log(correct_answer);
  console.log(test);

  const handleInput = (e) => {
    const { name, value } = e.target;
    //console.log({ name, value });
    test[name] = value;
    console.log(test);
    // if (name === "question") {
    //   test.questions[0][name] = value;
    //   console.log(test);
    // }
  };
  const defaultDate = { current: new Date() };
  console.log(defaultDate.current);
  return (
    <>
      <DashboardLayout>
        <MDBox pt={6} pb={3}>
          <Card>
            <MDBox
              variant="gradient"
              bgColor="info"
              borderRadius="lg"
              coloredShadow="success"
              mx={2}
              mt={-3}
              p={1}
              //   mb={1}
              textAlign="center"
            >
              <MDTypography
                variant="h4"
                fontWeight="medium"
                color="white"
                // mt={0}
              >
                Test Data
              </MDTypography>
            </MDBox>
            <MDBox p={2} mt={0}>
              <Grid container spacing={5}>
                <Grid item xs={12} md={4}>
                  <TextField
                    id="standard-textarea"
                    label="Title"
                    placeholder="Placeholder"
                    multiline
                    variant="standard"
                    fullWidth
                    onChange={handleInput}
                    name="title"
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    id="date"
                    label="Date"
                    type="datetime-local"
                    InputLabelProps={{ shrink: true }}
                    // value={date}
                    onChange={handleInput}
                    fullWidth
                    name="start_at"
                    required
                    placeholder={defaultDate.current}

                    // defaultValue={defaultDate.current}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    type="datetime-local"
                    id="standard-textarea"
                    label="Date"
                    InputLabelProps={{ shrink: true }}
                    // placeholder="Placeholder"
                    // multiline
                    // variant="standard"
                    fullWidth
                    required
                    name="end_at"
                    onChange={handleInput}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={4}
                    // defaultValue="Default Value"
                    fullWidth
                    onChange={handleInput}
                    name="description"
                  />
                </Grid>
              </Grid>
            </MDBox>
          </Card>
        </MDBox>
        {/* <Questions />? */}
        <MDBox pt={2} pb={3}>
          <Card>
            <MDBox
              variant="gradient"
              bgColor="info"
              borderRadius="lg"
              coloredShadow="success"
              mx={2}
              mt={-3}
              p={1}
              //   mb={1}
              textAlign="center"
            >
              <Grid container>
                <Grid item xs={12} md={12}>
                  <MDTypography
                    variant="h4"
                    fontWeight="medium"
                    color="white"
                    // mt={0}
                  >
                    Questions And Answers
                  </MDTypography>
                  <MDBox>
                    <Grid container spacing={5}>
                      <Grid item xs={4} md={4}>
                        <TextField
                          id="standard-textarea"
                          label="question"
                          placeholder="Placeholder"
                          multiline
                          variant="standard"
                          fullWidth
                          onChange={handleInput}
                          name="question"
                        />
                      </Grid>
                      <Grid item xs={4} md={4}>
                        <TextField
                          id="standard-textarea"
                          label="answer"
                          placeholder="Placeholder"
                          multiline
                          variant="standard"
                          fullWidth
                          onChange={handleInput}
                          name="answer"
                        />
                      </Grid>
                      <Grid item xs={4} md={4}>
                        <TextField
                          id="standard-textarea"
                          label="correct_answer"
                          placeholder="Placeholder"
                          multiline
                          variant="standard"
                          fullWidth
                          onChange={handleInput}
                          name="correct_ansewr"
                        />
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <MDButton variant="contained" color="success" fullWidth>
                          Button
                        </MDButton>
                      </Grid>
                    </Grid>
                  </MDBox>
                </Grid>
              </Grid>
            </MDBox>
          </Card>
        </MDBox>

        <Footer />
      </DashboardLayout>
    </>
  );
}

export default TestData;
