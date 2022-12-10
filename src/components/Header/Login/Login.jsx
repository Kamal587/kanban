import React from "react";
import arrow from "./../../assets/img/arrow.svg";
import ava from "./../../assets/img/ava.svg";
import "./Login.css";
import { useState } from "react";

function Login() {
  const [open, setOpen] = useState(false);
  return (
    <div className="userMenu">
      <div
        className="menu-trigger"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <img className="user-avatar" src={ava} alt="userIcon"></img>
        <img
          src={arrow}
          alt="arrow"
          className={`user-arrow ${open ? "up" : "down"}`}
        ></img>
      </div>
      <Stage className={`dropdown-full-menu ${open ? "active" : "inactive"}`} />
    </div>
  );
}

function Stage(props) {
  return (
    <div className={props.className}>
      <div className="dropdown-square"></div>
      <nav className="dropdown-menu">
        <ul>
          <StageItem text={"Profile"} />
          <StageItem text={"Log out"} />
        </ul>
      </nav>
    </div>
  );
}

function StageItem(props) {
  return (
    <li className="dropdown-item">
      <a href="##">{props.text}</a>
    </li>
  );
}

export default Login;
