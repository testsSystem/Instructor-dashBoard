import React from "react";
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
import { useState } from "react";
import MDSnackbar from "components/MDSnackbar";
import MDButton from "components/MDButton";
import Icon from "@mui/material/Icon";

import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import SimpleSnackbar from "layouts/Notifications";
const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
    fullWidth
  />
);

const renderCheckbox = ({ input, label }) => (
  <Grid container justifyContent={"center"}>
    <FormControlLabel
      control={
        <Checkbox
          checked={input.value ? true : false}
          onChange={input.onChange}
        />
      }
    />
  </Grid>
);

const renderAnswers = ({ fields, meta: { error } }) => (
  <Grid container>
    {fields.map((answer, index) => (
      <Grid item xs={12} key={index}>
        <Grid container justifyContent="center" mt={1}>
          <Grid item xs={10}>
            <Field
              name={`${answer}.answer`}
              type="text"
              component={renderTextField}
              label={`Answer #${index + 1}`}
            />
          </Grid>
          <Grid container item xs={1} justifyContent="center">
            <Field
              name={`${answer}.correct`}
              type="checkbox"
              component={renderCheckbox}
              // label={`is correct option?`}
            />
          </Grid>
          <Grid item xs={1} justifyContent="center">
            <MDButton
              variant="text"
              type="button"
              color="error"
              title="Remove Answer"
              onClick={() => fields.remove(index)}
            >
              <Icon fontSize="large"> delete </Icon>
            </MDButton>
          </Grid>
        </Grid>
      </Grid>
    ))}
    <Grid item xs={12}>
      <MDButton
        variant="text"
        type="button"
        color="info"
        title="Remove Question"
        onClick={() => fields.push({ answer: "", correct: false })}
      >
        <Icon fontSize="small"> add </Icon> Add Answer
      </MDButton>
    </Grid>
    {error && <li className="error">{error}</li>}
  </Grid>
);

const renderQuestions = ({
  fields,
  meta: { touched, error, submitFailed },
}) => {
  return (
    <>
      <MDBox p={2}>
        {/* <MDBox > */}
        <Grid container>
          <Grid item xs={12} md={12}>
            {(touched || submitFailed) && error && <span>{error}</span>}
          </Grid>

          {fields.map((question, index) => (
            <MDBox sx={{ width: "100%" }} p={2} key={index}>
              <Card>
                <Grid item xs={12} p={2}>
                  <Grid container justifyContent="center" my={2}>
                    <Grid item xs={11}>
                      <Field
                        name={`${question}.name`}
                        type="text"
                        component={renderTextField}
                        label={`Question #${index + 1}`}
                        sx={{ width: "100%" }}
                      />
                    </Grid>
                    <Grid item xs={1}>
                      <MDButton
                        variant="text"
                        type="button"
                        color="error"
                        title="Remove Question"
                        onClick={() => fields.remove(index)}
                      >
                        <Icon fontSize="small"> delete </Icon>
                      </MDButton>
                    </Grid>

                    <FieldArray
                      name={`${question}.answers`}
                      component={renderAnswers}
                    />
                  </Grid>
                </Grid>
              </Card>
            </MDBox>
          ))}
        </Grid>
      </MDBox>

      <MDBox pt={3}>
        <Grid container direction="row" justifyContent="center" mb={2}>
          <MDButton variant="text" color="info" onClick={() => fields.push({})}>
            <Icon fontSize="small"> add </Icon> Add New Question
          </MDButton>
        </Grid>
      </MDBox>
    </>
  );
};

const Test = (props) => {
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [serverResponse, setServerResponse] = useState("");
  const [snackBarType, setSnackBarType] = useState("success");
  const { pristine, reset, submitting, classes } = props;

  const closeSnackBar = () => setOpenSnackBar(false);

  // const {  } = props;
  const dispatch = useDispatch();

  const formData = useSelector((state) => state?.form?.Test?.values);

  let handleSubmit = (e) => {
    e.preventDefault();
    try {
      // console.log(formData);
      dispatch(postTestAction(formData));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <DashboardLayout>
      <form onSubmit={handleSubmit}>
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
              textAlign="center"
            >
              <MDTypography variant="h5" fontWeight="medium" color="white">
                Test Data
              </MDTypography>
            </MDBox>
            <MDBox p={2} mt={0}>
              <Grid container spacing={5}>
                <Grid item xs={4} md={4}>
                  <div>
                    <Field
                      name="testName"
                      type="text"
                      component={renderTextField}
                      label="Test Name"
                    />
                  </div>
                </Grid>

                <Grid item xs={12} md={4}>
                  <div>
                    <Field
                      name="startAt"
                      type="datetime-local"
                      component={renderTextField}
                      label="Start At"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={4}>
                  <div>
                    <Field
                      name="endAt"
                      type="datetime-local"
                      component={renderTextField}
                      label="End At"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={4}>
                  <div>
                    <Field
                      name="description"
                      type="text"
                      component={renderTextField}
                      label="Description"
                      fullWidth
                    />
                  </div>
                </Grid>
              </Grid>
            </MDBox>
          </Card>
        </MDBox>

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
              textAlign="center"
            >
              <MDTypography variant="h5" fontWeight="medium" color="white">
                Questions
              </MDTypography>
            </MDBox>

            <MDBox>
              <Grid container spacing={5}>
                <Grid item xs={12}>
                  <FieldArray name="questions" component={renderQuestions} />
                </Grid>
                <Grid item xs={12}>
                  <MDButton type="submit" disabled={submitting}>
                    Submit
                  </MDButton>

                  <MDButton
                    type="button"
                    disabled={pristine || submitting}
                    onClick={reset}
                  >
                    Clear Values
                  </MDButton>
                  {/* <button
                      type="button"
                      disabled={pristine || submitting}
                      onClick={reset}
                    >
                      Clear Values
                    </button> */}
                </Grid>
              </Grid>
            </MDBox>
          </Card>
        </MDBox>
      </form>
      {/* <MDSnackbar
        color={snackBarType}
        icon={snackBarType == "success" ? "check" : "warning"}
        title="Test Maker App"
        content={serverResponse}
        open={openSnackBar}
        // onClose={closeSnackBar}
        close={closeSnackBar}
        dateTime=""
        bgWhite
      /> */}
      <SimpleSnackbar />
    </DashboardLayout>
  );
};

export default reduxForm({
  form: "Test", // a unique identifier for this form
  validate,
})(Test);
