import React from "react";
import logo from "../images/logo512.png";

export class Hero extends React.Component {
  render() {
    return (
      <div className={this.props.darkMode ? "hero dark" : "hero light"}>
        <img src={logo} alt="hero-img" className="hero-img"></img>
        <div className="hero-content">
          <h1>Online experiances</h1>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    );
  }
}
