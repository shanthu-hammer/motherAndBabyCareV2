import React, { useState } from "react";
import "./logIn.css";
const Login = () => {
  let initiaformData = { uname: "", password: "" };

  const [formData, setFormData] = useState({ uname: "", password: "" });

  const handleClick = (e) => {
    e.preventDefault();
    console.log(formData);
    
    let spreadcheck = { ...formData, baz: 3 };
    console.log(spreadcheck);
  };
  return (
    <form>
      <div className="background">
        <h1>Login</h1>
        <div className="center">
          <label>Username</label>
          <br />
          <input
            className="textBox"
            onChange={(e) =>
              setFormData({ ...formData, uname: e.target.value })
            }
            value={formData.uname}
          ></input>
          <br />
          <div className="customSpacer"></div>
          <label>Password</label>
          <br />
          <input className="textBox" type="password"></input>
        </div>
        <div className="customSpacer"></div>
        <button onClick={handleClick}></button>
      </div>
    </form>
  );
};

export default Login;
