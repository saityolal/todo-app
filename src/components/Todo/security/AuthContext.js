import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);
function AuthProvider({ children }) {
  const [isAuthenticated, setAuthenticated] = useState(false);

  //setInterval(() =>setNumber(number+1), 1000);
  //const valueToBeShared = { number, isAuthenticated, setAuthenticated };

  function login(username, password) {
    if (username === "admin" && password === "admin") {
      setAuthenticated(true);
      return true;
    } else {
      setAuthenticated(false);
      return false;
    }
  }

  function logout() {
    setAuthenticated(false);
  }
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
