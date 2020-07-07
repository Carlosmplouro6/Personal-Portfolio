import React, { useContext } from "react";
import "./Screen.css";
import ButtonBay from "../ButtonBay/ButtonBay";
import Folder from "../Folder/Folder";
import Txt from "../Txt/Txt";
import { PortfolioContext } from "../../context/PortfolioContext";

const Screen = () => {
  const { openFolder } = useContext(PortfolioContext);

  return (
    <div className="Screen">
      {openFolder ? (
        <div className="ScreenFolder">
          <Folder />
        </div>
      ) : null}
      {openFolder ? (
        <div className="ScreenTxt">
          <Txt />
        </div>
      ) : null}
      <div className="NameDiv">
        <h1 className="DevName">Carlos Louro</h1>
        <h3 className="OcupationTitle">Web Developer</h3>
      </div>
      <div className="ButtonBay">
        <ButtonBay />
      </div>
    </div>
  );
};

export default Screen;
