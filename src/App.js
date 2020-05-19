import React from "react";
import "./App.css";
import Monitor from "./components/Monitor/Monitor";
import { PortfolioProvider } from "./context/PortfolioContext";
import "./fonts/segoe-ui.otf";

function App() {
  return (
    <PortfolioProvider>
      <div className="App">
        <Monitor />
      </div>
    </PortfolioProvider>
  );
}

export default App;
