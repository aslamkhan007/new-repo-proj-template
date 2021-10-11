import { useState } from "react";
import React from "react";
// import {} from "@material-ui/core";
import { NavLink } from "react-router-dom";





const validation = user=> {
  
    
  const errors = {};


  if(!user.name){
      errors.name = "name is required";

  }
   if (!user.email){
      errors.email = "email is required "
  }

    if(!user.password){
      errors.password = "password is required"
  }
  return errors;
};










export function Register() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});

  let name, value;
  const handleChange = (e) => {
    // console.log(e.target.value);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   alert("hello");

  //   const response = await fetch("", {
  //     method: "Post",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       name,
  //       // email,
  //       // password,
  //     }),
  //   });

  //   const data = await response.json();
  //   console.log(data);
  // };

  const handleSubmit = async (e) => {
    const { name, email, password } = user;
    
    e.preventDefault();
    setErrors(validation(user));

    const respone = await fetch("http://localhost:3030/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    });

    const data = await respone.json();

    // console.log(data);
    // alert(data.name);
  };

  return (
    <div className="sufee-login d-flex align-content-center flex-wrap bg-dark">
      <div className="container  container" >
        <div className="login-content">
          <div className="login-logo">
            <a href="index.html">
              <img className="align-content" src="images/logo.png" alt="" />
            </a>
          </div>
          <div className="login-form">
            <form>
              <div className="form-group">
                <label>User Name</label>
                <input
                  type="text"
                  value={user.name}
                  onChange={handleChange}
                  name="name"
                  className="form-control"
                  placeholder="User Name"
                  
                />
                {errors.name && <p className="error">{errors.name}</p>}
              </div>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  value={user.email}
                  onChange={handleChange}
                  name="email"
                  className="form-control"
                  placeholder="Email"
                />
                  {errors.email && <p className="error">{errors.email}</p>}
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  value={user.password}
                  onChange={handleChange}
                  name="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              {errors.password && <p className="error">{errors.password}</p>}
              <div className="checkbox">
                <label>
                  <input type="checkbox" /> Agree the terms and policy
                </label>
              </div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="btn btn-primary btn-flat m-b-30 m-t-30"
              >
                Register
              </button>

              <div className="register-link m-t-15 text-center">
                <p>
                  Already have account ? <NavLink to="/login"> Sign in</NavLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
