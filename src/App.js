import React from "react";
import "./App.css";
import Header from "./components/Header";
import Objective from "./components/Objective";
import Education from "./components/Education";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import References from "./components/References";
import Languages from "./components/Languages";

function App() {
  return (
    <div
      className="container"
      style={{ backgroundColor: "#CCCCCC", border: "5px ridge #3a86ff" }}
    >
      <Header />
      <Objective />
      <Education />
      <Skills />
      <Work />
      <Projects />
      <References />
      <Languages />
    </div>
  );
}

export default App;
