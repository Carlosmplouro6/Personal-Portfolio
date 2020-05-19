import React from "react";
import "./Monitor.css";
import monitor from "../../imgs/MonitorPortfolioImproved.png";
import Screen from "../Screen/Screen";
import { PortfolioProvider } from "../../context/PortfolioContext";

const Monitor = () => {
  return (
    <PortfolioProvider>
      <div>
        <img className="monitor" src={monitor} alt="Computer Monitor" />
        <Screen />
      </div>
    </PortfolioProvider>
  );
};

export default Monitor;
