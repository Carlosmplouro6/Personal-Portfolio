import React, { useContext } from "react";
import { PortfolioContext } from "../../context/PortfolioContext";

import "./Galerie.css";
import txtIcon from "../../imgs/TxtIcon.svg";
const Galerie = () => {
  const { setopenGalerie, galerieContent } = useContext(PortfolioContext);

  function closeGalerie() {
    setopenGalerie(false);
  }

  return (
    <div>
      <div className="outsideGalerie">
        <div className="GalerieTopBar">
          <div className="leftGalerieTopbar">
            <img className="GalerieIconTop" src={txtIcon} alt="" />
            <p className="GalerieTitle">Images - {galerieContent.name}</p>
          </div>
          <button className="GalerieClose" onClick={() => closeGalerie()}>
            X
          </button>
        </div>
        <div className="GalerieFullDownBox">
          <img src={galerieContent.image} alt={galerieContent.name}></img>
        </div>
      </div>
    </div>
  );
};

export default Galerie;
