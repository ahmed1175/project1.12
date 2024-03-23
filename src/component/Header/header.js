import React from "react";
import "./header.css";
import logo from "../../images/logo.svg";
const Header = () => {
  return (
    <div className="header">
      <div className="header">
        <img src={logo} alt="logo" />
        <div className="headerspan">
          <span className="headerspan1">Features</span>
          <span className="headerspan1">Pricing</span>
          <span className="headerspan1">Resources</span>
        </div>
      </div>
      <div className="bt-header">
        <button className="buttonheader1">Login</button>
        <button className="buttonheader">Sign Up</button>
      </div>
    </div>
  );
};

export default Header;
