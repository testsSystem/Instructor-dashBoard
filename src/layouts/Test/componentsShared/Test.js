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
import { useState } from "react";
import TextField from "@mui/material/TextField";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Answers from "./Answers";
import MDButton from "components/MDButton";
import Icon from "@mui/material/Icon";

import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

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
  <div>
    <FormControlLabel
      control={
        <Checkbox
          checked={input.value ? true : false}
          onChange={input.onChange}
        />
      }
      label={label}
    />
  </div>
);

const renderAnswers = ({ fields, meta: { error } }) => (
  <Grid container>
    <MDButton
      variant="text"
      type="button"
      color="info"
      title="Remove Question"
      onClick={() => fields.push({ answer: "", correct: false })}
    >
      <Icon fontSize="small"> add </Icon> Add Answer
    </MDButton>

    {fields.map((answer, index) => (
      <Grid key={index}>
        <MDButton
          variant="text"
          type="button"
          color="error"
          title="Remove Answer"
          onClick={() => fields.remove(index)}
        >
          <Icon fontSize="small"> delete </Icon> Delete an Answer
        </MDButton>
        <Field
          name={`${answer}.answer`}
          type="text"
          component={renderTextField}
          label={`Answer #${index + 1}`}
        />
        <Field
          name={`${answer}.correct`}
          type="checkbox"
          component={renderCheckbox}
          // label={`is correct option?`}
        />
      </Grid>
    ))}
    {error && <li className="error">{error}</li>}
  </Grid>
);

const renderQuestions = ({
  fields,
  meta: { touched, error, submitFailed },
}) => {
  return (
    <>
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
        </Card>

        <Grid container direction="row" justifyContent="center" mb={2}>
          <MDButton variant="text" color="info" onClick={() => fields.push({})}>
            <Icon fontSize="small"> add </Icon> Add New Question
          </MDButton>
        </Grid>
      </MDBox>
      <Grid container>
        <Grid>
          {(touched || submitFailed) && error && <span>{error}</span>}
        </Grid>

        {fields.map((question, index) => (
          ///////////////////////////
          <div key={index}>
            <Grid container justifyContent="space-between" my={2}>
              <Grid item xs={4} md={4}>
                <h4>{index + 1}</h4>
              </Grid>
              <Grid item xs={4} md={4}>
                <Field
                  name={`${question}.name`}
                  type="text"
                  component={renderTextField}
                  label="question"
                />
              </Grid>
              <Grid item xs={4} md={4}>
                <MDButton
                  variant="text"
                  type="button"
                  color="error"
                  title="Remove Question"
                  onClick={() => fields.remove(index)}
                >
                  <Icon fontSize="small"> delete </Icon> Delete a Question
                </MDButton>
              </Grid>

              <FieldArray
                name={`${question}.answers`}
                component={renderAnswers}
              />
            </Grid>
          </div>
        ))}
      </Grid>
    </>
  );
};

const Test = (props) => {
  const { pristine, reset, submitting, classes } = props;
  // const {  } = props;
  const dispatch = useDispatch();

  const formData = useSelector((state) => state?.form?.fieldArrays?.values);

  let handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      dispatch(postTestAction(formData));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <DashboardLayout>
      <form onSubmit={handleSubmit}>
        {/* <div>
          <Field
            name="testName"
            type="text"
            component={renderTextField}
            label="Test Name"
          />
        </div> */}
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
            <FieldArray name="questions" component={renderQuestions} />
            <div>
              <MDButton type="submit" disabled={submitting}>
                Submit
              </MDButton>
              {/* <button type="submit" disabled={submitting}>
                Submit
              </button> */}

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
            </div>
          </Card>
        </MDBox>
      </form>
    </DashboardLayout>
  );
};

export default reduxForm({
  form: "Test", // a unique identifier for this form
  validate,
})(Test);
