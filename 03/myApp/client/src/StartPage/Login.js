import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApiContext } from "../hooks/useApiContext";
import { useAuthContext } from "../hooks/useAuthContext";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [email_validation, setEmail_validation] = useState(true);
  const [password_validation, setPassword_validation] = useState(true);

  const { apiCall } = useApiContext();
  const { dispatch } = useAuthContext();
  
  const navigate = useNavigate();

  const emailChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setEmail_validation(true);
    }
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setPassword_validation(true);
    }
    setPassword(event.target.value);
  };

  const login = async (event) => {
    event.preventDefault();
    try {
      const { status, data } = await apiCall("users/login", "POST", {
        email,
        password,
      });
      console.log(status); // 200 | 400
      localStorage.setItem("user", JSON.stringify(data.user));
      dispatch({ type: "LOGIN", payload: data.user });
      navigate("/" + data.user.title.toLowerCase());
      // navigate("/instructor");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="auth-form-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={(e) => login(e)}>
          <label htmlFor="email">Email</label>
          <input
            style={{
              borderColor: !email_validation ? "red" : "#ccc",
              background: !email_validation ? "salmon" : "transparent",
            }}
            autoFocus
            value={email}
            onChange={emailChangeHandler}
            type="email"
            placeholder="example@gmail.com"
            id="email"
            name="email"
          />
          <label htmlFor="password">Password</label>
          <input
            style={{
              borderColor: !password_validation ? "red" : "#ccc",
              background: !password_validation ? "salmon" : "transparent",
            }}
            value={password}
            onChange={passwordChangeHandler}
            type="password"
            placeholder="*********"
            id="password"
            name="password"
          />
          <button type="submit">Log In</button>
        </form>
        <button
          className="link-btn"
          onClick={() => props.onFormSwitch("register")}
        >
          Don't have an account? Register here
        </button>
      </div>
    </div>
  );
};
