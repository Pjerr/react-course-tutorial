import React from "react";

export class MainContent extends React.Component {
  render() {
    return (
      <div className="mainContent">
        <h1 className="title">Fun facts about react!</h1>
        <ul className="list-items">
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has over 100K stars on Github</li>
          <li>Is maintained by Facebook</li>
        </ul>
      </div>
    );
  }
}
