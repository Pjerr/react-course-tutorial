import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { Card } from "./components/card";
import "./libraries/font-awesome";

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Navbar />
        <Hero />
        <div className="card-section">
          <Card name="Novak Djokovic" rating="5" />
          <Card name="Vlade Divac" rating="4.7" />
          <Card name="Zdravko Colic" rating="4.8" />
        </div>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
