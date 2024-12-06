import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);
function AuthProvider({ children }) {
  const [isAuthenticated, setAuthenticated] = useState(false);

  //setInterval(() =>setNumber(number+1), 1000);
  //const valueToBeShared = { number, isAuthenticated, setAuthenticated };

  const [username, setUsername] = useState(null);
  function login(username, password) {
    if (username === "admin" && password === "admin") {
      setAuthenticated(true);
      setUsername(username);
      return true;
    } else {
      setAuthenticated(false);
      setUsername(null);
      return false;
    }
  }

  function logout() {
    setAuthenticated(false);
  }
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, username }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
