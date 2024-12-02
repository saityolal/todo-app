import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import "./TodoApp.css";
import LogoutComponent from "./LogoutComponent";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import WelcomeComponent from "./WelcomeComponent";
import LoginComponent from "./LoginComponent";
import ListTodosComponent from "./ListTodosComponent";
import ErrorComponent from "./ErrorComponent";
import AuthProvider, { useAuth } from "../security/AuthContext";
export default function TodoApp() {
  function AuthenticatedRoute({ children }) {
    const authContext = useAuth();
    if (authContext.isAuthenticated) {
      return children;
    }

    return <Navigate to="/" />;
  }

  return (
    <div className="TodoApp">
      <AuthProvider>
        <BrowserRouter>
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<LoginComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route
              path="/welcome/:username"
              element={
                <AuthenticatedRoute>
                  <WelcomeComponent />
                </AuthenticatedRoute>
              }
            />
            {/* <Route path="/welcome" element={<WelcomeComponent />} /> */}
            <Route path="*" element={<ErrorComponent />} />
            <Route
              path="/todos"
              element={
                <AuthenticatedRoute>
                  <ListTodosComponent />
                </AuthenticatedRoute>
              }
            />
            <Route 
            path="/logout" element={
            <AuthenticatedRoute>
            <LogoutComponent />
            </AuthenticatedRoute>
            } />
          </Routes>
          <FooterComponent />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
