import React from "react";
import "./App.css";
import Monitor from "./components/Monitor/Monitor";
import { PortfolioContext } from "./context/PortfolioContext";

function App() {
  return (
    <PortfolioContext.Provider>
      <div className="App">
        <Monitor />
      </div>
    </PortfolioContext.Provider>
  );
}

export default App;
