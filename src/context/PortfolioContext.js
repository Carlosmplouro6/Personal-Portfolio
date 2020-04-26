import React, { createContext, useState } from "react";

export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [openFolder, setopenFolder] = useState(false);

  return (
    <PortfolioContext.Provider value={[openFolder, setopenFolder]}>
      {children}
    </PortfolioContext.Provider>
  );
};
