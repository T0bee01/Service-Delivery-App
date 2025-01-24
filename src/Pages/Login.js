import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Add CSS later

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <h1>Welcome to HandyGo</h1>
      <button onClick={() => navigate("/home")}>Enter</button>
    </div>
  );
};

export default Login;
