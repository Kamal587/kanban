import React from "react";
import style from "./Header.module.css";
import Login from "./Login/Login";

const Header = () => {
  return (
    <div className={style.root}>
      <div className={style.title}>Awesome Kanban Board</div>
      <Login />
    </div>
  );
};

export default Header;
