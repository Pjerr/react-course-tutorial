import React from "react";
import logo from "../images/logo512.png";

export class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <img src={logo} alt="logo" className="logo"></img>
      </nav>
    );
  }
}
