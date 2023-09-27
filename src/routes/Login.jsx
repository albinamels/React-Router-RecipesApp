import React, { useState } from "react";
import { Label, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const navigate = useNavigate(); // must invoke first here

  const handleChange = (e) => {
    // setUserData({ ...userData, email: e.target.value });
    // setUserData({ ...userData, password: e.target.value });
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  console.log(userData);

  const handleSubmit = (e) => {
    if (userData.email && userData.password) {
      localStorage.setItem("loggedIn", true);
    }
    navigate("/dishes");
  };

  const loggedIn = localStorage.getItem("loggedIn");

  return (
    !loggedIn && (
      <>
        <div style={{ width: "50%", margin: "40px auto" }}>
          <div className="mb-2">
            <Label for="exampleEmail">Email</Label>
            <Input
              name="email"
              placeholder="enter your email..."
              type="email"
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <Label for="examplePassword">Password</Label>
            <Input
              name="password"
              placeholder="enter your password..."
              type="password"
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <Button onClick={handleSubmit}>Submit</Button>
          </div>
        </div>
      </>
    )
  );
};
