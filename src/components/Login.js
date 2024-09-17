import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "auth-token":
        //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiOTIzNWJmZWYwNGU1ZmRiYjA4NWIzIn0sImlhdCI6MTY4OTkzMTI4MX0.AdOHlfj2WqzsnLx6VaPIkhCiw6LIEpN6gtmlrZoe8oY",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //Save the authtoken & redirect
      localStorage.setItem("token", json.authtoken);
      navigate("/");
      props.showAlert("LoggedIn Successfully!!!", "success");
    } else {
      props.showAlert("Invalid Details!! Try Again","danger");
    }
  };
  const handleOnchange = async (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleOnchange}
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleOnchange}
            className="form-control"
            id="password"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>

      <div className="container my-3 ">This is Login</div>
    </>
  );
};

export default Login;
