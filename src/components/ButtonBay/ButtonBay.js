import React, { useContext } from "react";
import "./ButtonBay.css";

import folderIcon from "../../imgs/FolderIcon.svg";
import txtIcon from "../../imgs/TxtIcon.svg";
import githubIcon from "../../imgs/GithubIcon.svg";
import linkedinIcon from "../../imgs/LinkedinIcon.svg";
import CoronaFocus from "../../imgs/CoronaFocus.png";
import Consequat from "../../imgs/Consequat.png";

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
                  name: "About CoronaFocus.txt",
                  inside: [
                    {
                      name: "About",
                      txt: (
                        <p>
                          This is a website that's using a public API to compare
                          the Covid19 cases per country, it was my first try at
                          building something around a API, i quickly fell in
                          love with API's and json and the power that comes with
                          it. I also took advantage of this website to learn how
                          domain names work and to oficially get my first one,
                          it was a really fun project, if i was able to change
                          something around would be to prepare my design before
                          starting to code, being the design the part i dislike
                          the most of the project. Overall it was a really fun
                          project and i learned alot with it, the project is
                          also fully responsive.
                        </p>
                      ),
                    },
                  ],
                },
                {
                  type: "txt",
                  name: "CoronaFocus Stack.txt",
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
                  name: "Website Images",
                  image: CoronaFocus,
                },
                {
                  type: "github",
                  name: "CoronaFocus Source Code",
                  link: "https://github.com/Carlosmplouro6/CoronaFocus",
                },
                {
                  type: "link",
                  name: "CoronaFocus Page Link",
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
                  name: "About Consequat.txt",
                  inside: [
                    {
                      name: "About",
                      txt: (
                        <p>
                          This is my first try at building a webapp with react,
                          and honestly the moment i started using it i fell in
                          love with React and everything it makes possible, one
                          of my favorite things to learn at the moment and it
                          was a real eye opening about the possibilities it
                          brings, this website was build using only funcional
                          components with react hooks and the usage of a
                          external public API really helped my understand some
                          of the inner workings of react and how to piece it all
                          together.
                        </p>
                      ),
                    },
                  ],
                },
                {
                  type: "txt",
                  name: "Consequat Stack.txt",
                  inside: [
                    {
                      name: "Stack",
                      txt: (
                        <>
                          <p>React</p>
                          <p>javascript</p>
                          <p>HTML</p>
                          <p>CSS</p>
                          <p>SCSS</p>
                        </>
                      ),
                    },
                  ],
                },
                {
                  type: "image",
                  name: "Website Images",
                  image: Consequat,
                },
                {
                  type: "github",
                  name: "Consequat Source Code",
                  link: "https://github.com/Carlosmplouro6/consequat",
                },
                {
                  type: "link",
                  name: "Consequat Page Link",
                  link: "https://carlosmplouro6.github.io/consequat/",
                },
              ],
            },
            {
              type: "folder",
              name: "Portfolio",
              inside: [
                {
                  folderName: "PortFolio",
                  type: "txt",
                  name: "About the Portfolio.txt",
                  inside: [
                    {
                      name: "About the Portfolio.txt",
                      txt: (
                        <p>
                          As you might imagine, this is the portfolio you are
                          right now, it was all built using React because i
                          really enjoy the whole workflow and what it makes
                          possible, i wanted to make a diferent portfolio from
                          most of the ones i found online, i had this idea and i
                          tought it would be a fun thing to play around with, so
                          i started building, at the moment i really like the
                          portfolio, how it looks and the features that it has,
                          i will be adding more features and some more fun side
                          parts in the future in a attempt to improve upon it
                          and make it more similar to a dark theme windows OS.
                          As a fun sidejoke the monitor where everything is
                          happening its actually my real monitor the one i use
                          the most. Both the monitor picture and my background
                          image (the pretty boy) were taken by my brother (Luis
                          Louro) who is a photographer.
                        </p>
                      ),
                    },
                  ],
                },
                {
                  type: "txt",
                  name: "Portfolio Stack.txt",
                  inside: [
                    {
                      name: "Portfolio Stack",
                      txt: (
                        <>
                          <p>React</p>
                          <p>javascript</p>
                          <p>HTML</p>
                          <p>CSS</p>
                          <p>SCSS</p>
                        </>
                      ),
                    },
                  ],
                },
                {
                  type: "github",
                  name: "Portfolio Source Code",
                  link: "https://github.com/Carlosmplouro6/Personal-Portfolio",
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
              txt: (
                <p>
                  Hello, welcome to my portfolio my name is Carlos Louro im
                  portuguese and im finishing a degree in biomedical
                  technologies, i love programming and i love creating fullstack
                  websites and games. I learned that i had a passion with
                  programming when i started learning it at the university, it
                  started in a basic class that taught C, the moment i started
                  learning the inner workings and how i could build stuff with
                  it i fell in love, and i also felt i was made for it, there
                  was a match and from there i started learning more and more
                  about the different fields inside it, i started learning C# to
                  work with unity making games and i had a lot of fun doing so,
                  afterwards i was sure this was what i would want to work with
                  for the rest of my life, so i started learning more about the
                  diferent fields and i got to the conclusion that what i wanted
                  to make and focus on professionaly was web development so i
                  started with the basics like everyone does, a bit of html here
                  a little splash of css there and i finally got to javascript,
                  the ease i had with that language really made me sure about my
                  choices, i fell in love with it, afterwards i started
                  developing some harder and more interesting ideas and started
                  learning react for the frontend and afterwards i started
                  learning node.js with express for the backend, i also learned
                  mysql in university so i just joined that to my stack i was a
                  full stack developer. Starting to build something from scratch
                  and touching both the backend and the frontend was amazing. At
                  the moment together with my fullstack development studies im
                  also using react native to build apps, my journey so far in
                  this whole area is something really amazing im really happy
                  about my choices.
                </p>
              ),
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
                  <p>You can use any of the following methods:</p>
                  <p>
                    Email:
                    <a href="mailto:carlosmplouro6@gmail.com">
                      carlosmplouro6@gmail.com
                    </a>
                  </p>
                  <p>
                    LinkedIn:
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.linkedin.com/in/carlos-louro-a3a1a61a7/"
                    >
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
