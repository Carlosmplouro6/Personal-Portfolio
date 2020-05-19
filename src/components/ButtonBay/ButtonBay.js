import React, { useContext } from "react";
import "./ButtonBay.css";

import { PortfolioContext } from "../../context/PortfolioContext";

const ButtonBay = () => {
  const { setopenFolder, setFolderContent } = useContext(PortfolioContext);

  function SetFolder(folderContent) {
    setopenFolder(true);
    setFolderContent(folderContent);
  }

  return (
    <div className="ButtonContainer">
      <div
        className="Button"
        onClick={() =>
          SetFolder([
            {
              type: "folder",
              name: "CoronaFocus",
            },
            {
              type: "folder",
              name: "Consequat",
            },
            {
              type: "txt",
              name: "LourixPlans",
            },
          ])
        }
      >
        <svg
          className="Folder"
          fill="#000000"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="50px"
          height="50px"
        >
          <path
            fill="Brown"
            stroke="White"
            strokeMiterlimit="10"
            strokeWidth="1"
            d="M26 4L6 4 6 27 18 29.5 18 27 24 27 24 15 26 13z"
          />
          <path
            fill="none"
            stroke="White"
            strokeMiterlimit="10"
            strokeWidth="1"
            d="M18 27L18 17.5 16 15.5 16 6.5 6 4"
          />
        </svg>
        <p className="ButtonName">Projects</p>
      </div>
    </div>
  );
};

export default ButtonBay;
