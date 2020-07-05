import React, { useContext } from "react";
import "./Folder.css";
import { PortfolioContext } from "../../context/PortfolioContext";
import FolderContent from "../FolderContent/FolderContent";

import leftArrow from "../../imgs/leftArrow.png";

const Folder = () => {
  const {
    setopenFolder,
    folderContent,
    setFolderContent,
    lastFolderContent,
    setLastFolderContent,
  } = useContext(PortfolioContext);

  function closeFolder() {
    setopenFolder(false);
  }

  function backFolder() {
    if (lastFolderContent === folderContent || lastFolderContent == null) {
      setopenFolder(false);
      setLastFolderContent(null);
    } else if (lastFolderContent != null) {
      setFolderContent(lastFolderContent);
    }
  }

  return (
    <div>
      <div className="outsideFolder">
        <div className="folderTopBar">
          <div className="leftfolderTopbar">
            <button className="folderBack" onClick={() => backFolder()}>
              <img
                className="folderBackArrow"
                src={leftArrow}
                alt="Left Arrow"
              />
            </button>
            <p className="folderTitle">Projects</p>
          </div>
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
