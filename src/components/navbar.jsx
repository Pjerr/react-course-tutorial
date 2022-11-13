import React from "react";
import logo from "../images/logo512.png";

export class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleDarkMode = this.handleToggleDarkMode.bind(this);
  }

  handleToggleDarkMode(event) {
    this.props.toggleDarkMode(event);
  }

  render() {
    return (
      <nav className="navbar">
        <img src={logo} alt="logo" className="logo"></img>
        <div className="darkModeButton">
          <label>Light</label>
          <label className="switch">
            <input
              type="checkbox"
              checked={this.props.darkMode}
              onChange={this.handleToggleDarkMode}
              name="darkMode"
            />
            <span className="slider round"></span>
          </label>
          <label>Dark</label>
        </div>
      </nav>
    );
  }
}
