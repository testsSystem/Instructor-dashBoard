import { Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Switch } from "@mui/material";
import Icon from "@mui/material/Icon";
import MDButton from "components/MDButton";

const Answer = (props) => {
  const deleteAnswer = () => {};
  const changeCorrectAnswer = (newCorrectAnswer) => {
    props.setCorrectAnswer(newCorrectAnswer);
  };
  return (
    <Grid container justifyContent="space-between" my={2}>
      <Grid item flex={1}>
        <TextField
          label={`Answer ${props.order + 1}`}
          variant="standard"
          fullWidth
          value={props.answer.title}
        />
      </Grid>
      <Grid item xs="auto">
        <Switch
          checked={props.order === props.correctAnswer}
          inputProps={{ "aria-label": "controlled" }}
          onChange={() => {
            changeCorrectAnswer(props.order);
          }}
        />
      </Grid>
      <Grid item xs="auto">
        <MDButton variant="text" color="error" onClick={deleteAnswer}>
          <Icon fontSize="large">delete</Icon>
        </MDButton>
      </Grid>
    </Grid>
  );
};

export default Answer;
