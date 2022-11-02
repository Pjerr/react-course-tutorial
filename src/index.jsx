import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { MainContent } from "./components/main-content";

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <MainContent />
        <Footer />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
