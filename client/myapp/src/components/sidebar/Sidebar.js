import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Navigation } from "../Navigation";

export const SideBar = () => {
  return (
    <>
      <aside id="left-panel" className="left-panel">
        <nav
          className="navbar navbar-expand-sm navbar-default"
          style={{ top: "45px" }}
        >
          <div id="main-menu" className="main-menu collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li>
                <NavLink to="/home">
                  <i className="menu-icon fa fa-laptop"></i>Home{" "}
                </NavLink>
              </li>

              <li>
                <NavLink to="">
                  <i className="menu-icon fa fa-laptop"></i>User{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/register">
                  <i className="menu-icon fa fa-laptop"></i>Register{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/login">
                  <i className="menu-icon fa fa-laptop"></i>Login{" "}
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
    </>
  );
};
