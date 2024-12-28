import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./security/AuthContext";

function LoginComponent() {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("");

  const [showErrorMessage, setErrorMessage] = useState(false);

  const navigate = useNavigate();

  const authContext = useAuth();

  function handleUsernameChange(event) {
    // console.log(event.target.value);
    setUsername(event.target.value);
  }

  function handlepasswordChange(event) {
    // console.log(event.target.value);
    setPassword(event.target.value);
  }

  async function handleSubmit() {
    if (await authContext.login(username, password)) {
      navigate(`/welcome/${username}`);
    } else {
      setErrorMessage(true);
    }
  }

  return (
    <div className="Login">
      {showErrorMessage && <div className="errorMessage">Login Failed</div>}
      <div className="LoginForm">
        <div>
          <label>User Name:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label>Password:</label>
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

export default LoginComponent;
