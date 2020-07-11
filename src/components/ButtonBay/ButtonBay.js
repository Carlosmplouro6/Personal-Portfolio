import React, { useContext } from "react";
import "./ButtonBay.css";

import { PortfolioContext } from "../../context/PortfolioContext";

const ButtonBay = () => {
  const {
    setopenFolder,
    setFolderContent,
    setopenTxt,
    setTxtContent,
  } = useContext(PortfolioContext);

  function SetFolder(folderContent) {
    setopenFolder(true);
    setFolderContent(folderContent);
  }

  function SetTxt(txtContent) {
    setopenTxt(true);
    setTxtContent(txtContent);
  }

  return (
    <div className="ButtonContainer">
      <div
        className="Button"
        onClick={() =>
          SetFolder([
            {
              type: "folder",
              name: "CoronaFocus",
              inside: [
                {
                  type: "txt",
                  name: "About.txt",
                },
                {
                  type: "txt",
                  name: "Stack.txt",
                },
              ],
            },
            {
              type: "folder",
              name: "Consequat",
              inside: [
                {
                  type: "txt",
                  name: "About.txt",
                },
                {
                  type: "txt",
                  name: "Stack.txt",
                },
              ],
            },
            {
              type: "txt",
              name: "LourixPlans",
            },
          ])
        }
      >
        <svg
          className="Folder"
          fill="#000000"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="50px"
          height="50px"
        >
          <path
            fill=" #e6cb73"
            stroke="black"
            strokeMiterlimit="10"
            strokeWidth="1"
            d="M26 4L6 4 6 27 18 29.5 18 27 24 27 24 15 26 13z"
          />
          <path
            fill="none"
            stroke="black"
            strokeMiterlimit="10"
            strokeWidth="1"
            d="M18 27L18 17.5 16 15.5 16 6.5 6 4"
          />
        </svg>
        <p className="ButtonName">Projects</p>
      </div>
      <div
        className="Button"
        onClick={() =>
          SetFolder([
            {
              type: "folder",
              name: "CoronaFocus",
              inside: [
                {
                  type: "txt",
                  name: "About.txt",
                },
                {
                  type: "txt",
                  name: "Stack.txt",
                },
              ],
            },
            {
              type: "folder",
              name: "Consequat",
              inside: [
                {
                  type: "txt",
                  name: "About.txt",
                },
                {
                  type: "txt",
                  name: "Stack.txt",
                },
              ],
            },
            {
              type: "txt",
              name: "LourixPlans",
            },
          ])
        }
      >
        <svg
          className="Folder"
          fill="#000000"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="50px"
          height="50px"
        >
          <path
            fill=" #e6cb73"
            stroke="black"
            strokeMiterlimit="10"
            strokeWidth="1"
            d="M26 4L6 4 6 27 18 29.5 18 27 24 27 24 15 26 13z"
          />
          <path
            fill="none"
            stroke="black"
            strokeMiterlimit="10"
            strokeWidth="1"
            d="M18 27L18 17.5 16 15.5 16 6.5 6 4"
          />
        </svg>
        <p className="ButtonName">Projects</p>
      </div>
      <div className="Button" onClick={() => SetTxt("Hello this is a TXT")}>
        <svg
          width="50px"
          height="50px"
          enable-background="new 0 0 128 170"
          version="1.1"
          viewBox="0 0 128 170"
        >
          <path
            d="M127.199,29l0.211-0.004L99,0.379V0h-0.793L98.09-0.117L97.973,0H9.586C4.063,0,0,4.477,0,10v150  c0,5.523,4.063,10,9.586,10h108c5.522,0,10.414-4.477,10.414-10V29H127.199z M109,121H98v29h-8v-29H80v-7.026l-11.133,17.202  L81.136,150h-9.88l-7.748-11.96L55.812,150h-9.776l12.131-18.616L47,114.14V121H37v29h-8v-29H18v-7h28.867h0.313h9.411l6.916,10.764  L70.424,114h9.567h0.208H109V121z M108.586,29C103.063,29,99,24.523,99,19V4.622L122.965,29H108.586z"
            fill="#ffffff"
          />
        </svg>

        <p className="ButtonName">Projects</p>
      </div>
    </div>
  );
};

export default ButtonBay;
