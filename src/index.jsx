import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import dataFile from "./data.js";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { Card } from "./components/card";
import "./libraries/font-awesome";

class App extends React.Component {
  render() {
    const data = dataFile.map((person) => <Card key={person.id} {...person} />);
    return (
      <div className="wrapper">
        <Navbar />
        <Hero />
        <div className="card-section">{data}</div>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
