/* eslint-disable import/no-anonymous-default-export */
import { useNavigate, useParams } from "react-router-dom";
import { createTodoApi, retrieveTodoApi, updateTodoApi } from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";
import { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import moment from "moment";

export default function () {
  const { id } = useParams();
  const navigate = useNavigate();
  const authContext = useAuth();
  const username = authContext.username;

  const [description, setDescription] = useState("");
  const [targetDate, setTargetDate] = useState("");
  useEffect(() => retrieveTodo(), [id]); // [] to run the effect only once when the component mounts

  function retrieveTodo() {
    if (id !== -1) {
      retrieveTodoApi(username, id)
        .then((response) => {
          setDescription(response.data.description);
          setTargetDate(response.data.targetDate);
        })
        .catch((error) => console.error("Error:", error));
    }
  }

  function onSubmit(values) {
    console.log(values);
    const todo = {
      // Field of the JSON object
      id: id,
      username: username,
      description: values.description,
      targetDate: values.targetDate,
      done: false,
    };
    console.log(todo);

    if (id == -1) {
      // Credate a new todo
      createTodoApi(username, todo)
        .then((response) => {
          console.log(response);
          navigate("/todos");
        })
        .catch((error) => console.log(error));
    } else {
      updateTodoApi(username, id, todo)
        .then((response) => {
          console.log(response);
          navigate("/todos");
        })
        .catch((error) => console.log(error));
    }
  }
  function validate(values) {
    let errors = {
      // description: "Enter valid description",
      // targetDate: "Enter valid target date"
    };
    if (values.description.length < 5) {
      errors.description = "Description must be at least 5 characters long";
    }
    if (!values.targetDate || isNaN(Date.parse(values.targetDate)) || !moment(values.targetDate).isValid()) {
      errors.targetDate = "Enter a valid target date";
    }

    return errors;
  }
  return (
    <div className="container">
      <h1>Todo Component</h1>
      <div>
        {/* We need to pass the initialValues here and reinitialize to true to refresh the form */}
        <Formik
          initialValues={{ description, targetDate }}
          enableReinitialize={true}
          onSubmit={onSubmit}
          validate={validate}
          validateOnChange={false} // validate only on submit
          validateOnBlur={false} // validate only on blur
          // first validate called then onSubmit called unless it returns error
        >
          {(props) => (
            <Form>
              <ErrorMessage
                name="description"
                component="div"
                className="alert alert-warning"
              />
              <ErrorMessage
                name="targetDate"
                component="div"
                className="alert alert-warning"
              />
              <fieldset className="form-group">
                <label>Description</label>
                <Field
                  type="text"
                  className="form-control"
                  name="description"
                />
              </fieldset>
              <fieldset className="form-group">
                <label>Target Date</label>
                <Field type="date" className="form-control" name="targetDate" />
              </fieldset>
              <div>
                <button className="btn btn-success m-5 " type="submit">
                  Save
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
