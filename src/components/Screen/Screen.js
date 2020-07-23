import React, { useContext } from "react";
import "./Screen.css";
import ButtonBay from "../ButtonBay/ButtonBay";
import Folder from "../Folder/Folder";
import Txt from "../Txt/Txt";
import Galerie from "../Galerie/Galerie";
import { PortfolioContext } from "../../context/PortfolioContext";

const Screen = () => {
  const { openFolder, openTxt, openGalerie } = useContext(PortfolioContext);

  var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName("typewrite");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-type");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML =
      ".typewrite > .wrap { border-right: 0.08em solid transparent}";
    document.body.appendChild(css);
  };

  return (
    <div className="Screen">
      {openFolder ? (
        <div className="ScreenFolder">
          <Folder />
        </div>
      ) : null}
      {openTxt ? (
        <div className="ScreenTxt">
          <Txt />
        </div>
      ) : null}
      {openGalerie ? (
        <div className="ScreenTxt">
          <Galerie />
        </div>
      ) : null}
      <div className="NameDiv">
        <h1 className="DevName">Carlos Louro</h1>
        <p
          href=""
          className="typewrite"
          data-period="2000"
          data-type='[ "Web Developer", "FullStack Developer", "FrontEnd Developer", "BackEnd Developer" ]'
        >
          <span className="wrap"></span>
        </p>
      </div>
      <div className="ButtonBay">
        <ButtonBay />
      </div>
    </div>
  );
};

export default Screen;
