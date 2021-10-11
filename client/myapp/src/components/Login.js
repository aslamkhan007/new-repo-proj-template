import React, { useEffect } from "react";
// import Notifications from "react-notifications/lib/Notifications";
import { NotificationContainer } from "react-notifications";
import { NavLink, useHistory, Redirect } from "react-router-dom";
import loginpic from "../images/logo.png";
import { useState } from "react";
import { Navigation } from "./Navigation";
import { validation } from "./validation";
import { Loader } from "./Loader/Loader";
import "react-notifications/lib/notifications.css";
import { createNotification } from "./Notification/Notification";
export function Login() {
  const [userLogin, setLogin] = useState({ email: "", password: "" });
  const [loader, setLoader] = useState(false);
  const [notification, setNotification] = useState({});

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
      // setLoader(true);
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
      console.log(response, "llllllllllllllllllll");
      if (response.status === 201) {
        createNotification("success", "welcome user ");
        // console.log(data1, "hcdgvdvdvd");
        localStorage.setItem(
          "token",
          JSON.stringify({
            login: true,
            token: data1.accessToken,
            email,
          })
        );
        setTimeout(() => {
          setLoader(false);
          console.log(data1, "hhhhhhhhhhhh");
          history.push("/home");
        }, 2000);

        // setLoader(false);
        //  history.push("/login")
      } else {
        console.log(data1, " elselllhhhhhhhhhhhhhhlllllllllllllllll");
        if (data1.code == 401) {
          createNotification("warning", "invalid credentials");

          console.log(data1.code);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      history.push("/home");
    }
  }, []);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
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
          <NotificationContainer />
        </div>
      )}
    </>
  );
}
