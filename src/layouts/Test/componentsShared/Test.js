import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import validate from "./validate";
import { useSelector, useDispatch } from "react-redux";
import { postTestAction } from "../../../store/actions/tests";
// import TextField from "@material-ui/core/TextField";

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

const renderAnswers = ({ fields, meta: { error } }) => (
  <ul>
    <li>
      <button
        type="button"
        onClick={() => fields.push({ answer: "", correct: false })}
      >
        Add Answer
      </button>
    </li>
    {fields.map((answer, index) => (
      <li key={index}>
        <button
          type="button"
          title="Remove Answer"
          onClick={() => fields.remove(index)}
        />
        <Field
          name={`${answer}.answer`}
          type="text"
          component={renderField}
          label={`Answer #${index + 1}`}
        />
        <Field
          name={`${answer}.correct`}
          type="checkbox"
          component={renderField}
          label={`is correct option?`}
        />
      </li>
    ))}
    {error && <li className="error">{error}</li>}
  </ul>
);

const renderQuestions = ({
  fields,
  meta: { touched, error, submitFailed },
}) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push({})}>
        Add Question
      </button>
      {(touched || submitFailed) && error && <span>{error}</span>}
    </li>
    {fields.map((question, index) => (
      <li key={index}>
        <button
          type="button"
          title="Remove Question"
          onClick={() => fields.remove(index)}
        />
        <h4>Question #{index + 1}</h4>
        <Field
          name={`${question}.name`}
          type="text"
          component={renderField}
          label="question"
        />
        <FieldArray name={`${question}.answers`} component={renderAnswers} />
      </li>
    ))}
  </ul>
);

const Test = (props) => {
  const { pristine, reset, submitting } = props;
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
    <form onSubmit={handleSubmit}>
      <Field
        name="testName"
        type="text"
        component={renderField}
        label="Test Name"
      />
      <Field
        name="startAt"
        type="datetime-local"
        component={renderField}
        label="Start At"
      />
      <Field
        name="endAt"
        type="datetime-local"
        component={renderField}
        label="End At"
      />
      <Field
        name="description"
        type="text"
        component={renderField}
        label="Description"
      />
      <FieldArray name="questions" component={renderQuestions} />
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "fieldArrays", // a unique identifier for this form
  validate,
})(Test);
