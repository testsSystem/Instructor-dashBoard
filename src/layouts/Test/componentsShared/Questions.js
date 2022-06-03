import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import Icon from "@mui/material/Icon";
import { useState } from "react";
import Question from "./Question";

const Questions = (props) => {
  const AddQuestion = () => {
    const newQuestions = [...props.questions];
    newQuestions.push({
      title: "",
      answers: [],
    });
    props.setQuestions(newQuestions);
  };

  const [expanded, setExpanded] = useState(false);

  return (
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
          textAlign="center"
        >
          <Grid container>
            <Grid item xs={12} md={12}>
              <MDTypography variant="h5" fontWeight="medium" color="white">
                Questions
              </MDTypography>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox p={5}>
          {props.questions.map((question, i) => {
            return (
              <Question
                question={question}
                key={i}
                order={i}
                expanded={expanded}
                setExpanded={setExpanded}
              />
            );
          })}
        </MDBox>
        <Grid container direction="row" justifyContent="center" mb={2}>
          <MDButton variant="text" color="info" onClick={AddQuestion}>
            <Icon fontSize="small"> add </Icon> Add New Question
          </MDButton>
        </Grid>
      </Card>
    </MDBox>
  );
};

export default Questions;
