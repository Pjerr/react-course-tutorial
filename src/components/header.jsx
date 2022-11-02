import React from "react";

export class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <nav className="nav">
          <img src="./favicon.ico" alt="slika" className="logo"></img>
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
