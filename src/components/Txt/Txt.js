import React, { useContext } from "react";
import { PortfolioContext } from "../../context/PortfolioContext";

import "./Txt.css";
import txtIcon from "../../imgs/TxtIcon.svg";
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
            <img className="txtIconTop" src={txtIcon} alt="" />
            <p className="txtTitle">{txtContent[0].name}</p>
          </div>
          <button className="txtClose" onClick={() => closeTxt()}>
            X
          </button>
        </div>
        <div className="txtFullDownBox">{txtContent[0].txt}</div>
        <div className="txtBottomBar"></div>
      </div>
    </div>
  );
};

export default Txt;
