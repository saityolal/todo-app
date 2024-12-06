import { useEffect, useState } from "react";
import {
  retrieveAllTodosWithUserNameApi,
  deleteTodoApi,
} from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";
import { useNavigate } from "react-router-dom";

function ListTodosComponent() {
  const today = new Date();
  const targetDate = new Date(
    today.getFullYear() + 12,
    today.getMonth(),
    today.getDay()
  );

  const authContext = useAuth();
  const username = authContext.username;

  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState(null);

  const navigate = useNavigate();
  useEffect(() => refreshTodos(), []);

  function refreshTodos() {
    retrieveAllTodosWithUserNameApi(username)
      .then((response) => {
        console.log("API Response:", response);
        setTodos(response.data);
      })
      .catch((error) => console.error("Error:", error));
  }

  function deleteTodo(id) {
    console.log("DeleteTodo is called " + id);
    deleteTodoApi(username, id)
      .then(() => {
        setMessage(`Delete of todo id ${id} successful`);
        refreshTodos();
      })
      .catch((error) => console.error(error));
  }
  function updateTodo(id) {
    console.log("UpdateTodo is called " + id);
    navigate(`/todos/${id}`);
  }
  // const todos = [
  //   {
  //     id: 1,
  //     description: "Learn React",
  //     done: false,
  //     targetDate: targetDate,
  //   },
  //   {
  //     id: 2,
  //     description: "Learn Angular",
  //     done: false,
  //     targetDate: targetDate,
  //   },
  //   {
  //     id: 3,
  //     description: "Learn Vue",
  //     done: false,
  //     targetDate: targetDate,
  //   },
  // ];
  return (
    <div className="container">
      <h1>
        <i>List of things to do.</i>
      </h1>
      {message && <div className="alert alert-danger">{message}</div>}
      <table className="table">
        <thead>
          <tr>
            <th>Descripcion</th>
            <th>Is done?</th>
            <th>Target Date</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.description}</td>
              <td>{todo.done.toString()}</td>
              <td>{todo.targetDate.toString()}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={() => updateTodo(todo.id)}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListTodosComponent;
