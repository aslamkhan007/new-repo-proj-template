import React from "react";
import { NavLink } from "react-router-dom";


export const Navigation = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-gray">
  <a className="navbar-brand" href="#">Dashboard</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink>
      </li>
     
      <li className="nav-item">
        <NavLink className="nav-link" to="/product">Product</NavLink>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>

{localStorage.getItem("token")?
<ul className="navbar-nav ml-auto">
 <li className="nav-item">
 <NavLink className="nav-link" to="/logout" >Logout</NavLink>
</li>
</ul>
:
<ul className="navbar-nav mr-auto  ml-auto">
<li className="nav-item">
<NavLink className="nav-link" to="/login">Login</NavLink>
</li>
</ul>


}
   
  </div>
</nav>    </>
  );
};
