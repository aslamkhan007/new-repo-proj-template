import React, { useEffect, useState } from "react";
import axios from "axios";
import { SideBar } from "../sidebar/Sidebar";
import { Navigation } from "../Navigation";
import { AddUser } from "./AddUser";

export const User = () => {
  const [userList, SetUserList] = useState([]);

  useEffect(async () => {
    const result = await axios.get("http://localhost:3030/users");
    // SetUserList(result.data.data)
    let arr = result.data.data;
    arr.sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.updatedAt).getTime()
    );

    SetUserList(arr);
    console.log(arr);
  }, []);

  return (
    <>
      <Navigation />
      <div className="d-flex">
        <SideBar />

        <table class="table py-5 " style={{marginTop:"60px"}}>
          <thead class="thead-dark">
            <tr>
              <th scope="col" style={{ background: "#5d5daf94" }}>
                Name
              </th>
              <th scope="col" style={{ background: "#5d5daf94" }}>
                Email
              </th>
              {/* <th><AddUser/></th> */}
            </tr>
          </thead>
          <tbody>
            {userList &&
              userList.length > 0 &&
              userList.map((item, index) => (
                <tr key={item.name}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>

                  <td> view</td>
                  <td>Edit</td>
                </tr>
              ))}
          </tbody>
        </table>
        <div>
          {/* <button className = "btn btn-outline-primary"></button> */}
          <AddUser />
        </div>
      </div>
    </>
  );
};
