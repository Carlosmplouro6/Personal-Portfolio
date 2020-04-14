import React from "react";
import "./Monitor.css";
import monitor from "../../imgs/monitor.jpg";
import Screen from "../Screen/Screen";

const Monitor = () => {
  return (
    <div>
      <img className="monitor" src={monitor} alt="Computer Monitor" />
      <Screen />
    </div>
  );
};

export default Monitor;
