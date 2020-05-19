import React, { useState, useContext } from "react";
import "./Folder.css";
import { PortfolioContext } from "../../context/PortfolioContext";
import FolderContent from "../FolderContent/FolderContent";

const Folder = () => {
  const { setopenFolder } = useContext(PortfolioContext);

  function closeFolder() {
    setopenFolder(false);
  }

  return (
    <div>
      <div className="outsideFolder">
        <div className="folderTopBar">
          <p className="folderTitle">Projects</p>
          <button className="folderClose" onClick={() => closeFolder()}>
            X
          </button>
        </div>
        <div className="folderFullDownBox">
          <div className="folderMainContent">
            <FolderContent />
          </div>
        </div>
        <div className="folderBottomBar">
          <div className="folderBottomBarNItems"> x items |</div>
        </div>
      </div>
    </div>
  );
};

export default Folder;
