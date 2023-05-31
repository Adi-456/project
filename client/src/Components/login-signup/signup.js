import React, { Component, useState } from "react";
import { toast } from "react-toastify";
import "./login.css"

export default function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
   
      e.preventDefault();

      console.log(fname, lname, email, password);
      fetch("http://localhost:5000/Ebartr/authenticate/signup", {
        method: "POST",
        body: JSON.stringify({
          // Add parameters here
          first_name: fname,
          last_name: lname,
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
          if(data.success){
                    data = data.data;
                    localStorage.setItem("token", data.token);
                    window.localStorage.setItem(
                      "userId",
                      JSON.stringify(data.userId)
                    );
                    window.localStorage.setItem("email", data.email);
                    window.localStorage.setItem("first_name", data.first_name);
                    window.localStorage.setItem("last_name", data.last_name);
                    toast.success("Signup Successfull");
                    setTimeout(() => {
                      window.location.href = "/";
                    }
                    , 2000);
          }else{
            toast.error(data.data.message);
            console.log(data.data.message);
          }
          // window.location.href = "/dashboard";
          // Handle data
        }
        )
        .catch((err) => {
          console.log(err.message)
          ;
          toast(err.message);
          setTimeout(() => {
            window.location.href = "/signup";
          }
          , 2000);
        }
        );
    
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              onChange={(e) => setFname(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              onChange={(e) => setLname(e.target.value)}
            />
          </div>

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

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
          </p>
        </form>
      </div>
    </div>
  );
}
