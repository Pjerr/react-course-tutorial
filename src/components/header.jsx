import React from "react";
import logo from "../images/logo512.png";
export class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <nav className="nav">
          <img src={logo} alt="slika" className="logo"></img>
          <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    );
  }
}
