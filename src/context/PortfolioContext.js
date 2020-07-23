import React, { createContext, useState } from "react";

export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [openFolder, setopenFolder] = useState(false);
  const [folderContent, setFolderContent] = useState([]);
  const [lastFolderContent, setLastFolderContent] = useState();

  const [openTxt, setopenTxt] = useState(false);
  const [txtContent, setTxtContent] = useState();

  const [openGalerie, setopenGalerie] = useState(false);
  const [galerieContent, setGalerieContent] = useState();

  return (
    <PortfolioContext.Provider
      value={{
        openFolder,
        setopenFolder,
        folderContent,
        setFolderContent,
        lastFolderContent,
        setLastFolderContent,
        openTxt,
        setopenTxt,
        txtContent,
        setTxtContent,
        openGalerie,
        setopenGalerie,
        galerieContent,
        setGalerieContent,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};
