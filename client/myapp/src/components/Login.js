import React, { useEffect } from "react";
import { NavLink, useHistory, Redirect } from "react-router-dom";
import loginpic from "../images/logo.png";
import { useState } from "react";
import { Navigation } from "./Navigation";
import { validation } from "./validation";
import { Loader } from "./Loader/Loader";

export function Login() {
  const [userLogin, setLogin] = useState({ email: "", password: "" });
  const [loader, setLoader] = useState(false);

  const [errors, setErrors] = useState({});

  const history = useHistory();

  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    console.log(e.target.value);

    validation(userLogin);

    setLogin({ ...userLogin, [name]: value });
  };
  const handlesubmit = async (e) => {
    try {
      const { email, password } = userLogin;
      e.preventDefault();

      setErrors(validation(userLogin));

      const response = await fetch("http://localhost:3030/authentication", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          strategy: "local",
        }),
      });

      const data1 = await response.json();
console.log(data1)
// if(data1){
//   history.push("/home");
// }else{
//   <Loader/>
// }
      // if (data1.email) {
      //   console.log("hello");
      // } else {
      // }
     // console.log(data1);
      if (data1 && data1.accessToken) {
        localStorage.setItem(
          "token",
          JSON.stringify({
            login: true,
            token: data1.accessToken,
            email,
          })
        );

        console.log(data1, "hhhhhhhhhhhh");
        history.push("/home");
       }
       // else {
      //   console.log("hellol");
      // }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      history.push("/home");
    }
  });
  return (
    <>
      
        <div className="sufee-login d-flex align-content-center flex-wrap  bg-dark ">
          <div className="container">
            <div className="login-content">
              <div className="login-logo">
                <a href="index.html">
                  <img className="align-content" src={loginpic} alt="in" />
                </a>
              </div>
              <div className="login-form">
                <form method="post">
                  <div className="form-group">
                    <label>Email address</label>
                    <input
                      type="email"
                      value={userLogin.email}
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
                      value={userLogin.password}
                      onChange={handleChange}
                      name="password"
                      className="form-control"
                      placeholder="Password"
                    />
                    {errors.password && (
                      <p className="error">{errors.password}</p>
                    )}
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" /> Remember Me
                    </label>
                    <label className="pull-right">
                      <a href="#">Forgotten Password?</a>
                    </label>
                  </div>
                  <button
                    type="submit"
                    onClick={handlesubmit}
                    className="btn btn-success btn-flat m-b-30 m-t-30"
                  >
                    Sign in
                  </button>

                  <div className="social-login-content">
                    <div className="social-button"></div>
                  </div>
                  <div className="register-link m-t-15 text-center">
                    <p>
                      Don't have account ?{" "}
                      <NavLink to="/register"> Sign Up Here</NavLink>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
}
