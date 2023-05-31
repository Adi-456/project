import React, { Component, useState } from "react";
import { toast } from "react-toastify";

import "./login.css";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(email, password);
    fetch("http://localhost:5000/Ebartr/authenticate/login", {
        method: "POST",
        body: JSON.stringify({
          // Add parameters here
  
          email: email,
          password: password,
  
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
  
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data = data.data
          localStorage.setItem("token", data.token);
          window.localStorage.setItem("userId", JSON.stringify(data.userId));
          window.localStorage.setItem("email", data.email);
          window.localStorage.setItem("first_name", data.first_name);
          window.localStorage.setItem("last_name", data.last_name);
          toast.success("Login Successfull");
          setTimeout(() => {
            window.location.href = "/";
          }, 2000);
  
          // Handle data
        }
        )
        .catch((err) => {
          console.log(err.message);
          toast.error("Something Went Wrong");
        }
        );
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign In</h3>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">
            <a href="/sign-up">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
}
