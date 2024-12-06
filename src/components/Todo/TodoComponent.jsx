/* eslint-disable import/no-anonymous-default-export */
import { useParams } from "react-router-dom";
import { retrieveTodoApi } from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";
import { useEffect, useState } from "react";

export default function () {
  const { id } = useParams();
  const authContext = useAuth();
  const username = authContext.username;

  const [description, setDescription] = useState("")
  useEffect(() => retrieveTodo(), [id]); // [] to run the effect only once when the component mounts

  function retrieveTodo() {
    retrieveTodoApi(username, id)
      .then((response) => setDescription(response.data.description))
      .catch((error) => console.error("Error:", error));
  }
  return (
    <div className="container">
      <h1>Todo Component</h1>
      <div>description : {description}</div>
    </div>
  );
}
