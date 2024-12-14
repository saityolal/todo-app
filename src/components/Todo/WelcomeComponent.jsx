import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { retrieveAllTodosWithUserNameApi } from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";
import { retrieveHelloWorldPathVariable } from "./api/HelloWorldApiService";
function WelcomeComponent() {
  const { username } = useParams();

  const authContext = useAuth();

  const [message, setMessage] = useState(null);

  function callHelloWorldRestApi() {
    
    // axios
    //   .get("http://localhost:8080/hello-world")
    //   .then((response) => successfulResponse(response))
    //   .catch((error) => errorResponse(error))
    //   .then(() => console.log("cleanup"));

    // retrieveHelloWorldBean()
    //   .then((response) => successfulResponse(response))
    //   .catch((error) => errorResponse(error))
    //   .finally(() => console.log("cleanup"));

      retrieveHelloWorldPathVariable(username, authContext.token)
      .then((response) => successfulResponse(response))
      .catch((error) => errorResponse(error))
      .finally(() => console.log("cleanup"));

      // retrieveAllTodosWithUserNameApi("admin")
      // .then((response) => successfulResponse(response))
      // .catch((error) => errorResponse(error))
      // .finally(() => console.log("cleanup"));
  }

  function successfulResponse(response) {
    console.log(response);
    //setMessage(response.data);
    setMessage(response.data.message );
  }

  function errorResponse(error) {
    console.log(error);
  }
  return (
    <div className="Welcome">
      <h1>Welcome {username}</h1>
      <div>
        <Link to="/todos">View Todos</Link>
      </div>
      <div>
        <button
          className="btn btn-success m-5 p-2"
          onClick={callHelloWorldRestApi}
        >
          Call Hello World Rest Api
        </button>
      </div>
      <div className="text-info">{message}</div>
    </div>
  );
}

export default WelcomeComponent;
