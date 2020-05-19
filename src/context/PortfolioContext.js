import React, { createContext, useState } from "react";

export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [openFolder, setopenFolder] = useState(false);
  const [folderContent, setFolderContent] = useState([]);
  const [lastFolderContent, setLastFolderContent] = useState();

  return (
    <PortfolioContext.Provider
      value={{
        openFolder,
        setopenFolder,
        folderContent,
        setFolderContent,
        lastFolderContent,
        setLastFolderContent,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};
