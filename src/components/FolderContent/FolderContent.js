import React, { useContext } from "react";
import "./FolderContent.css";
import { PortfolioContext } from "../../context/PortfolioContext";

const FolderContent = () => {
  const {
    folderContent,
    setopenFolder,
    setFolderContent,
    setLastFolderContent,
    setopenTxt,
    setTxtContent,
    setopenGalerie,
    setGalerieContent,
  } = useContext(PortfolioContext);

  function openNew(content) {
    if (content.type === "folder") {
      SetFolder(content.inside);
    } else if (content.type === "txt") {
      SetTxt(content.inside);
    } else if (content.type === "image") {
      console.log(content);
      SetGalerie(content);
    }
  }

  function SetFolder(newFolderContent) {
    setLastFolderContent(folderContent);
    setopenFolder(true);
    setFolderContent(newFolderContent);
  }

  function SetTxt(txtContent) {
    setopenTxt(true);
    setTxtContent(txtContent);
  }

  function SetGalerie(galerieContent) {
    setopenGalerie(true);
    setGalerieContent(galerieContent);
  }

  return (
    <div>
      {folderContent.map((content, index) => (
        <div key={index}>
          {content.link ? (
            <div
              className="folderLines"
              key={index}
              onClick={() => {
                openNew(content);
              }}
            >
              <a target="_blank" rel="noopener noreferrer" href={content.link}>
                <div className="folderLineContainer">
                  <div className={content.type}></div>
                  <div className="subfolderName">{content.name}</div>
                </div>
              </a>
            </div>
          ) : (
            <div
              className="folderLines"
              key={index}
              onClick={() => {
                openNew(content);
              }}
            >
              <div className="folderLineContainer">
                <div className={content.type}></div>
                <div className="subfolderName">{content.name}</div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FolderContent;
