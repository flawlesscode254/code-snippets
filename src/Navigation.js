import React from "react";
import "./Navigation.css";

import Logo from "./images/atom.svg";

function Navigation() {
  return (
    <div className="main">
      <div className="logo-div">
        <img className="logo" src={Logo} alt="react-logo" />
        <h1 className="title"><span style={{
            color: "blue",
            backgroundColor: "white"
        }}>React-Native</span> Snippets</h1>
      </div>
    </div>
  );
}

export default Navigation;
