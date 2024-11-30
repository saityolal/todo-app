import { useState } from "react";
import "./TodoApp.css";

export default function TodoApp() {
  return (
    <div className="TodoApp">
      Todo Management Application
      <LoginComponent />
      <WelcomeComponent />
    </div>
  );
}

function LoginComponent() {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("");

  const [showSuccessMessage, setSuccessMessage] = useState(false);
  const [showErrorMessage, setErrorMessage] = useState(false);
  function handleUsernameChange(event) {
    // console.log(event.target.value);
    setUsername(event.target.value);
  }

  function handlepasswordChange(event) {
    // console.log(event.target.value);
    setPassword(event.target.value);
  }

  function handleSubmit() {
    if (username === "admin" && password === "admin") {
      console.log("Login Success");
      setSuccessMessage(true);
      setErrorMessage(false);
    } else {
      console.log("Login Failed");
      setSuccessMessage(false);
      setErrorMessage(true);
    }
  }

  function SuccessMessageComponent() {
    if (showSuccessMessage) {
      return <div className="successMessage">Login Success</div>;
    } else {
      return null;
    }
  }
  function ErrorMessageComponent() {
    if (showErrorMessage) {
      return <div className="errorMessage">Login Failed</div>;
    } else {
      return null;
    }
  }
  return (
    <div className="Login">
      <SuccessMessageComponent />
      <ErrorMessageComponent />
      <div className="LoginForm">
        <div>
          <label>User Name: </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={handlepasswordChange}
          />
        </div>
        <div>
          <button type="button" onClick={handleSubmit}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

function WelcomeComponent() {
  return <div className="Welcome">Welcome</div>;
}
