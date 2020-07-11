import React, { useContext } from "react";
import { PortfolioContext } from "../../context/PortfolioContext";

import "./Txt.css";
const Txt = () => {
  const { setopenTxt, txtContent } = useContext(PortfolioContext);

  function closeTxt() {
    setopenTxt(false);
  }

  return (
    <div>
      <div className="outsideTxt">
        <div className="txtTopBar">
          <div className="leftTxtTopbar">
            <p className="txtTitle">Projects</p>
          </div>
          <button className="txtClose" onClick={() => closeTxt()}>
            X
          </button>
        </div>
        <div className="txtFullDownBox">
          <div className="txtMainContent">{txtContent}</div>
        </div>
        <div className="txtBottomBar"></div>
      </div>
    </div>
  );
};

export default Txt;
