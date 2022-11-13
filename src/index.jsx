import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import dataFile from "./data.js";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { Card } from "./components/card";
import "./libraries/font-awesome";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      darkMode: false,
    };

    this.handleToggleDarkMode = this.handleToggleDarkMode.bind(this);
  }

  handleToggleDarkMode(event) {
    const { name, value, type, checked } = event.target;
    this.setState({ [name]: type === "checkbox" ? checked : value }, () =>
      console.log(this.state.darkMode)
    );
  }

  render() {
    const data = dataFile.map((person) => (
      <Card key={person.id} {...person} darkMode={this.state.darkMode} />
    ));
    return (
      <div className="app" id="light">
        <Navbar
          darkMode={this.state.darkMode}
          toggleDarkMode={this.handleToggleDarkMode}
        />
        <Hero darkMode={this.state.darkMode} />
        <div
          className={
            this.state.darkMode ? "card-section dark" : "card-section light"
          }
        >
          {data}
        </div>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
