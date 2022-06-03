import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MDBox from "components/MDBox";
import Answers from "./Answers";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import MDButton from "components/MDButton";
import Icon from "@mui/material/Icon";

const Question = (props) => {
  const [question, setQuestion] = useState(props.question);

  const handleQuestionToggle = (panel) => (event, isExpanded) => {
    props.setExpanded(isExpanded ? panel : false);
  };

  const addNewAnswer = () => {
    const newAnswers = [...question.answers];
    newAnswers.push({
      title: "",
      isCorrect: false,
    });
    setQuestion({
      ...question,
      answers: newAnswers,
    });
  };
  const handleInput = (newValue) => {
    console.log(props);
    setQuestion({
      ...props.question,
      ...newValue,
    });
  };

  const deleteQuestion = () => {};
  return (
    <MDBox mb={3}>
      <Accordion
        expanded={props.expanded === `panel${props.order}`}
        onChange={handleQuestionToggle(`panel${props.order}`)}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ width: "100%", flexShrink: 0 }}>
            {`${props.order + 1}. ${question.title}`}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextField
            label="Question"
            variant="standard"
            fullWidth
            onChange={(e) => {
              handleInput({ title: e.target.value });
            }}
            //value={props.question.title}
          />
          <MDBox>
            <MDBox p={4}>
              <Answers answers={question?.answers} />
            </MDBox>
            <Grid container justifyContent={"center"}>
              <MDButton variant="text" color="success" onClick={addNewAnswer}>
                <Icon fontSize="small">add</Icon> Add New Answer
              </MDButton>
              <MDButton variant="text" color="error" onClick={deleteQuestion}>
                <Icon fontSize="small">delete</Icon> Delete Question
              </MDButton>
            </Grid>
          </MDBox>
        </AccordionDetails>
      </Accordion>
    </MDBox>
  );
};

export default Question;
