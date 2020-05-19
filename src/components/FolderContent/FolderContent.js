import React, { useContext } from "react";
import "./FolderContent.css";
import { PortfolioContext } from "../../context/PortfolioContext";

const FolderContent = () => {
  const {
    folderContent,
    setopenFolder,
    setFolderContent,
    setLastFolderContent,
  } = useContext(PortfolioContext);

  function SetFolder(newFolderContent) {
    setLastFolderContent(folderContent);
    setopenFolder(true);
    setFolderContent(newFolderContent);
  }

  return (
    <div>
      {folderContent.map((content, index) => (
        <div
          className="folderLines"
          key={index}
          onClick={() => {
            SetFolder(content.inside);
          }}
        >
          <div className="folderLineContainer">
            <div className={content.type}></div>{" "}
            <div className="subfolderName">{content.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FolderContent;
