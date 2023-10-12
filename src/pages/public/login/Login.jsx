import React, { useState } from "react";
import HeaderLogin from "../../../components/headerLogin/HeaderLogin";
import "./style/login.css";

function Login() {
  const [nameUser, setNameUser] = React.useState(" ");
  const [password, setPasword] = React.useState(" ");
  return (
    <div
      /* className="principal_container" */ style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1124&q=100')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div>
        <HeaderLogin />
      </div>

      <span className="card_login">
        <h1 className="tittle">Login </h1>
        <form className="form_login">
          <div className="container_input">
            Username
            <input
              className="input_form"
              type="text"
              onChange={(event) => setNameUser(event.target.value)}
            />
          </div>
          <div className="container_input">
            Password
            <input
              className="input_form"
              type="password"
              onChange={(event) => setPasword(event.target.value)}
            />
          </div>
          <button className="button_login">Login</button>
        </form>
      </span>
    </div>
  );
}

export default Login;
