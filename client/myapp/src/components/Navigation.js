import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AddUser } from "./pages/AddUser";


export const Navigation = () => {
  // const [showModal,setShowModal] = useState(false);

  // let addmodalClose = ()=>{setShowModal(false)}
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-gray"
        style={{ background: "#21541ba3", fontSize: "27px" }}
      >
        <a className="navbar-brand" href="#">
          Dashboard
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
        
       
          </ul>
      

          {localStorage.getItem("token") ? (
            <ul className="navbar-nav ml-auto">
    


              

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  style={{ fontSize: "19px" }}
                  to="/logout"
                >
                  Logout
                </NavLink>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav mr-auto  ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </nav>{" "}
    </>
  );
};
