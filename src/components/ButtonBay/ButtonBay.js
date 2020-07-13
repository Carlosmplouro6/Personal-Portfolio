import React, { useContext } from "react";
import "./ButtonBay.css";

import folderIcon from "../../imgs/FolderIcon.svg";
import txtIcon from "../../imgs/TxtIcon.svg";
import githubIcon from "../../imgs/GithubIcon.svg";
import linkedinIcon from "../../imgs/LinkedinIcon.svg";

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
              folderName: "Projects",
              type: "folder",
              name: "CoronaFocus",
              inside: [
                {
                  folderName: "CoronaFocus",
                  type: "txt",
                  name: "About.txt",
                  inside: [
                    {
                      name: "About",
                      txt:
                        "This is a website that's using a public API to compare the Covid19 cases per country.",
                    },
                  ],
                },
                {
                  type: "txt",
                  name: "Stack.txt",
                  inside: [
                    {
                      name: "Stack",
                      txt:
                        "Built using html css and javascript, using chartjs for charting needs",
                    },
                  ],
                },
              ],
            },
            {
              type: "folder",
              name: "Consequat",
              inside: [
                {
                  folderName: "Consequat",
                  type: "txt",
                  name: "About.txt",
                  inside: [
                    {
                      name: "About",
                      txt:
                        "This is a try project for react, built using a recipie API, its my first try at using react and i loved it.",
                    },
                  ],
                },
                {
                  type: "txt",
                  name: "Stack.txt",
                  inside: [
                    {
                      name: "Stack",
                      txt: "The whole stack is React only",
                    },
                  ],
                },
              ],
            },
            {
              type: "txt",
              name: "LourixPlans",
              inside: [
                {
                  name: "LourixPlans",
                  txt:
                    "Lourix is a company that focus on building great games for better communities",
                },
              ],
            },
          ])
        }
      >
        <img src={folderIcon} alt="" />
        <p className="ButtonName">Projects</p>
      </div>

      <div
        className="Button"
        onClick={() =>
          SetTxt([
            {
              name: "About Me",
              txt:
                "Hello, welcome to my portfolio my name is Carlos Louro im portuguese and i have a degree in biomedical technologies, i love programming and i am used to creating fullstack websites and games. ",
            },
          ])
        }
      >
        <img src={txtIcon} alt="" />

        <p className="ButtonName">AboutMe</p>
      </div>

      <a
        target="_blank"
        rel="noopener noreferrer"
        className="Button"
        href="https://github.com/Carlosmplouro6"
      >
        <img className="" src={githubIcon} alt="" />

        <p className="ButtonName">Github</p>
      </a>

      <a
        target="_blank"
        rel="noopener noreferrer"
        className="Button"
        href="https://github.com/Carlosmplouro6"
      >
        <img className="" src={linkedinIcon} alt="" />

        <p className="ButtonName">LinkedIn</p>
      </a>

      <div
        className="Button"
        onClick={() =>
          SetTxt([
            {
              name: "Technologies",
              txt: (
                <>
                  <p>javascript</p>
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>React</p>
                  <p>Node.js</p>
                  <p>Firebase</p>
                  <p>Github</p>
                </>
              ),
            },
          ])
        }
      >
        <img src={txtIcon} alt="" />

        <p className="ButtonName">Technologies</p>
      </div>
    </div>
  );
};

export default ButtonBay;
