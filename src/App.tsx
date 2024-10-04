import React from "react";
import "./App.css";
import KanaCards from "./components/KanaCards";

const App: React.FC = () => {
  return (
    <div className="App">
      <span className="header">KanaLearn </span>
      <KanaCards />
    </div>
  );
};

export default App;
