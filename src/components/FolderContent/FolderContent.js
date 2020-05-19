import React, { useContext, useEffect } from "react";
import { PortfolioContext } from "../../context/PortfolioContext";

const FolderContent = () => {
  const { folderContent } = useContext(PortfolioContext);

  return (
    <div>
      {folderContent.map((content, index) => (
        <div key={index}>
          <span>{content.type}</span> <span>{content.name}</span>
        </div>
      ))}
    </div>
  );
};

export default FolderContent;
