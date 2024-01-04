import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        This project was coded by KifilweJasmin and is{" "}
        <a
          href="https://github.com/KifilweJasmin/weather-react--2"
          target="blank"
        >
          {" "}
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
