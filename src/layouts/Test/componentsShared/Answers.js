import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import Answer from "./Answer";

const findCorrectAnswer = (answers) => {
  for (var i = 0; i < answers.length; i++) {
    if (answers[i].correctAnswer) {
      return i;
    }
  }
  return 0;
};

export default function Answers(props) {
  const [correctAnswer, setCorrectAnswer] = useState(
    findCorrectAnswer(props.answers)
  );
  return (
    <MDBox pt={2} pb={2}>
      <Grid container direction="column">
        {props.answers?.map((answer, i) => {
          return (
            <Answer
              answer={answer}
              key={i}
              order={i}
              setCorrectAnswer={setCorrectAnswer}
              correctAnswer={correctAnswer}
            />
          );
        })}
      </Grid>
    </MDBox>
  );
}
