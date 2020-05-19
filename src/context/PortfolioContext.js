import React, { createContext, useState } from "react";

export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [openFolder, setopenFolder] = useState(false);
  const [folderContent, setFolderContent] = useState([]);

  return (
    <PortfolioContext.Provider
      value={(openFolder, setopenFolder, folderContent, setFolderContent)}
    >
      {children}
    </PortfolioContext.Provider>
  );
};
