import React, { useContext } from "react";
import "./ButtonBay.css";

import folderIcon from "../../imgs/FolderIcon.svg";
import txtIcon from "../../imgs/TxtIcon.svg";
import githubIcon from "../../imgs/GithubIcon.svg";
import linkedinIcon from "../../imgs/LinkedinIcon.svg";
import CoronaFocus from "../../imgs/CoronaFocus.png";

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
                        "This is a website that's using a public API to compare the Covid19 cases per country, it was my first try at building something around a API, i quickly fell in love with API's and json and the power that comes with it. I also took advantage of this website to learn how domain names work and to oficially get my first one, it was a really fun project, if i was able to change something around would be to prepare my design before starting to code, being the design the part i dislike the most of the project. Overall it was a really fun project and i learned alot with it, the project is also fully responsive.",
                    },
                  ],
                },
                {
                  type: "txt",
                  name: "Stack.txt",
                  inside: [
                    {
                      name: "Stack",
                      txt: (
                        <>
                          <p>javascript</p>
                          <p>HTML</p>
                          <p>CSS</p>
                          <p>SCSS</p>
                          <p>Chart.js</p>
                        </>
                      ),
                    },
                  ],
                },
                {
                  type: "image",
                  name: "Devices Image",
                  image: CoronaFocus,
                },
                {
                  type: "github",
                  name: "Source Code",
                  link: "https://github.com/Carlosmplouro6/CoronaFocus",
                },
                {
                  type: "link",
                  name: "Page Link",
                  link: "https://corona-focus.pt/",
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
                "Hello, welcome to my portfolio my name is Carlos Louro im portuguese and i have a degree in biomedical technologies, i love programming and i love creating fullstack websites and games. ",
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
        href="https://www.linkedin.com/in/carlos-louro-a3a1a61a7/"
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
                  <p>SCSS</p>
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
      <div
        className="Button"
        onClick={() =>
          SetTxt([
            {
              name: "Contact Me",
              txt: (
                <>
                  <p>
                    Feel free to contact me for any reason at all, be it work
                    related or if you just want to talk with me about a cool new
                    framework you have found out.
                  </p>
                  <p>You can follow any of the following methods:</p>
                  <p>
                    Email:
                    <a href="mailto:carlosmplouro6@gmail.com">
                      carlosmplouro6@gmail.com
                    </a>
                  </p>
                  <p>
                    LinkedIn:
                    <a href="https://www.linkedin.com/in/carlos-louro-a3a1a61a7/">
                      Carlos Louro
                    </a>
                  </p>
                </>
              ),
            },
          ])
        }
      >
        <img src={txtIcon} alt="" />

        <p className="ButtonName">ContactMe</p>
      </div>
    </div>
  );
};

export default ButtonBay;
