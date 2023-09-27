import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../store/usersSlice";
import Input from "@mui/material/Input";
import { Button } from "@mui/material";
const UserCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    position: "",
    experience: "",
  });

  function addUser() {
    for (let k in user) {
      if (!user[k].trim()) {
        alert("some inp empty");
      }
    }
    dispatch(createUser(user));
    navigate("/");
  }

  return (
    <div>
      <h3>register user</h3>
      <Input
        type="text"
        placeholder="name"
        onChange={(e) => {
          setUser({ ...user, name: e.target.value });
        }}
        value={user.name}
      />

      <Input
        type="text"
        placeholder="position"
        onChange={(e) => {
          setUser({ ...user, position: e.target.value });
        }}
        value={user.position}
      />

      <Input
        type="text"
        placeholder="experience"
        onChange={(e) => {
          setUser({ ...user, experience: e.target.value });
        }}
        value={user.experience}
      />
      <Button
        sx={{ color: "black", border: "1px solid", borderRadius: "20px" }}
        onClick={addUser}
      >
        add
      </Button>
    </div>
  );
};

export default UserCreate;
