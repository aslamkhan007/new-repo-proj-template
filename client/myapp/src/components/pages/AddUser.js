import axios from "axios";
import React, { useState } from "react";
import { SideBar } from "../sidebar/Sidebar";
import { useHistory } from "react-router";
import { Navigation } from "../Navigation";
import { Modal, Button, Row } from "react-bootstrap";

export const AddUser = (props) => {
  const history = useHistory();

  const [addUser, setUser] = useState({
    name: "",
    email: "",
  });

  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...addUser, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios
      .post("http://localhost:3030/users", addUser)
      .then((response) => {
        setUser(response.data);
        history.push("/user");
        console.log(response.data);

        //console.log(res)
      });
    console.log(res);
  };

  return (
    <>
      {/* <SideBar/> */}
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
 Add User
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add User lIst</h5>

        <form>
            <input type ="text"></input>
        </form>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </>
  );
};
