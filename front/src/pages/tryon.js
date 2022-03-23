import "../App.css";
import React from "react";
import styles from "./stylepages.css";
let tab_hats = [
  require("../clothes/hat1.png"),
  require("../clothes/hat2.png"),
  require("../clothes/hat3.png"),
  require("../clothes/hat4.png"),
  require("../clothes/hat5.png"),
];
let tab_tops = [
  require("../clothes/top1.png"),
  require("../clothes/top2.png"),
  require("../clothes/top3.png"),
  require("../clothes/top4.png"),
  require("../clothes/top5.png"),
];
let tab_pants = [
  require("../clothes/pants1.png"),
  require("../clothes/pants2.png"),
  require("../clothes/pants3.png"),
  require("../clothes/pants4.png"),
  require("../clothes/pants5.png"),
];
let tab_shoes = [
  require("../clothes/shoes1.png"),
  require("../clothes/shoes2.png"),
  require("../clothes/shoes3.png"),
  require("../clothes/shoes4.png"),
  require("../clothes/shoes5.png"),
];
let indexHatLeft = 0;
let indexHatMain = 1;
let indexHatRight = 2;
let indexTopLeft = 0;
let indexTopMain = 1;
let indexTopRight = 2;
let indexPantsLeft = 0;
let indexPantsMain = 1;
let indexPantRight = 2;
let indexShoesLeft = 0;
let indexShoesMain = 1;
let indexShoesRight = 2;
function App() {
  return (
    <div className="App">
    <p>Try your clothes here and get a style bro !</p>
      <div className="parent1">
        <div className="body">
          <div className="mainhat">
            <img id="mainhat" src={tab_hats[indexHatMain]} />
          </div>
          <div className="mainshirt">
            <img id="mainshirt" src={tab_tops[indexTopMain]} />
          </div>
          <div className="mainpants">
            <img id="mainpants" src={tab_pants[indexPantsMain]} />
          </div>
          <div className="mainshoes">
            <img id="mainshoes" src={tab_shoes[indexShoesMain]} />
          </div>
          <div className="lefthat">
            <img
              id="lefthat"
              className="imgside"
              src={tab_hats[indexHatLeft]}
            />
          </div>
          <div className="leftshirt">
            <img
              id="leftshirt"
              className="imgside"
              src={tab_tops[indexTopLeft]}
            />
          </div>
          <div className="leftpants">
            <img
              id="leftpants"
              className="imgside"
              src={tab_pants[indexPantsLeft]}
            />
          </div>
          <div className="leftshoes">
            <img
              id="leftshoes"
              className="imgside"
              src={tab_shoes[indexShoesLeft]}
            />
          </div>
          <div className="righthat">
            <img
              id="righthat"
              className="imgside"
              src={tab_hats[indexHatRight]}
            />
          </div>
          <div className="rightshirt">
            <img
              id="rightshirt"
              className="imgside"
              src={tab_tops[indexTopRight]}
            />
          </div>
          <div className="rightpants">
            <img
              id="rightpants"
              className="imgside"
              src={tab_pants[indexPantRight]}
            />
          </div>
          <div className="rightshoes">
            <img
              id="rightshoes"
              className="imgside"
              src={tab_shoes[indexShoesRight]}
            />
          </div>
        </div>
        <div className="left">
          <div className="div1">
            <button onClick={decrementHats}>&lt;</button>
          </div>
          <div className="div2">
            <button onClick={decrementTops}>&lt;</button>
          </div>
          <div className="div3">
            <button onClick={decrementPants}>&lt;</button>
          </div>
          <div className="div4">
            <button onClick={decrementShoes}>&lt;</button>
          </div>
        </div>
        <div className="right">
          <div className="div1">
            <button onClick={incrementHats}>&gt;</button>
          </div>
          <div className="div2">
            <button onClick={incrementTops}>&gt;</button>
          </div>
          <div className="div3">
            <button onClick={incrementPants}>&gt;</button>
          </div>
          <div className="div4">
            <button onClick={incrementShoes}>&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function incrementHats() {
  if (indexHatMain < tab_hats.length - 1) {
    indexHatMain++;
  } else {
    indexHatMain = 0;
  }
  if (indexHatLeft < tab_hats.length - 1) {
    indexHatLeft++;
  } else {
    indexHatLeft = 0;
  }
  if (indexHatRight < tab_hats.length - 1) {
    indexHatRight++;
  } else {
    indexHatRight = 0;
  }
  var element = document.getElementById("mainhat");
  element.setAttribute("src", tab_hats[indexHatMain]);
  element = document.getElementById("lefthat");
  element.setAttribute("src", tab_hats[indexHatLeft]);
  element = document.getElementById("righthat");
  element.setAttribute("src", tab_hats[indexHatRight]);
}

function decrementHats() {
  if (indexHatMain > 0) {
    indexHatMain--;
  } else {
    indexHatMain = tab_hats.length - 1;
  }
  if (indexHatLeft > 0) {
    indexHatLeft--;
  } else {
    indexHatLeft = tab_hats.length - 1;
  }
  if (indexHatRight > 0) {
    indexHatRight--;
  } else {
    indexHatRight = tab_hats.length - 1;
  }
  var element = document.getElementById("mainhat");
  element.setAttribute("src", tab_hats[indexHatMain]);
  element = document.getElementById("lefthat");
  element.setAttribute("src", tab_hats[indexHatLeft]);
  element = document.getElementById("righthat");
  element.setAttribute("src", tab_hats[indexHatRight]);
}

function incrementTops() {
  if (indexTopMain < tab_tops.length - 1) {
    indexTopMain++;
  } else {
    indexTopMain = 0;
  }
  if (indexTopLeft < tab_tops.length - 1) {
    indexTopLeft++;
  } else {
    indexTopLeft = 0;
  }
  if (indexTopRight < tab_tops.length - 1) {
    indexTopRight++;
  } else {
    indexTopRight = 0;
  }
  var element = document.getElementById("mainshirt");
  element.setAttribute("src", tab_tops[indexTopMain]);
  element = document.getElementById("leftshirt");
  element.setAttribute("src", tab_tops[indexTopLeft]);
  element = document.getElementById("rightshirt");
  element.setAttribute("src", tab_tops[indexTopRight]);
}

function decrementTops() {
  if (indexTopMain > 0) {
    indexTopMain--;
  } else {
    indexTopMain = tab_tops.length - 1;
  }
  if (indexTopLeft > 0) {
    indexTopLeft--;
  } else {
    indexTopLeft = tab_tops.length - 1;
  }
  if (indexTopRight > 0) {
    indexTopRight--;
  } else {
    indexTopRight = tab_tops.length - 1;
  }
  var element = document.getElementById("mainshirt");
  element.setAttribute("src", tab_tops[indexTopMain]);
  element = document.getElementById("leftshirt");
  element.setAttribute("src", tab_tops[indexTopLeft]);
  element = document.getElementById("rightshirt");
  element.setAttribute("src", tab_tops[indexTopRight]);
}

function incrementPants() {
  if (indexPantsMain < tab_pants.length - 1) {
    indexPantsMain++;
  } else {
    indexPantsMain = 0;
  }
  if (indexPantsLeft < tab_pants.length - 1) {
    indexPantsLeft++;
  } else {
    indexPantsLeft = 0;
  }
  if (indexPantRight < tab_pants.length - 1) {
    indexPantRight++;
  } else {
    indexPantRight = 0;
  }
  console.log(indexPantsMain);
  var element = document.getElementById("mainpants");
  element.setAttribute("src", tab_pants[indexPantsMain]);
  element = document.getElementById("leftpants");
  element.setAttribute("src", tab_pants[indexPantsLeft]);
  element = document.getElementById("rightpants");
  element.setAttribute("src", tab_pants[indexPantRight]);
}

function decrementPants() {
  if (indexPantsMain > 0) {
    indexPantsMain--;
  } else {
    indexPantsMain = tab_pants.length - 1;
  }
  if (indexPantsLeft > 0) {
    indexPantsLeft--;
  } else {
    indexPantsLeft = tab_pants.length - 1;
  }
  if (indexPantRight > 0) {
    indexPantRight--;
  } else {
    indexPantRight = tab_pants.length - 1;
  }
  console.log(indexPantsMain);
  var element = document.getElementById("mainpants");
  element.setAttribute("src", tab_pants[indexPantsMain]);
  element = document.getElementById("leftpants");
  element.setAttribute("src", tab_pants[indexPantsLeft]);
  element = document.getElementById("rightpants");
  element.setAttribute("src", tab_pants[indexPantRight]);
}

function incrementShoes() {
  if (indexShoesMain < tab_shoes.length - 1) {
    indexShoesMain++;
  } else {
    indexShoesMain = 0;
  }
  if (indexShoesLeft < tab_shoes.length - 1) {
    indexShoesLeft++;
  } else {
    indexShoesLeft = 0;
  }
  if (indexShoesRight < tab_shoes.length - 1) {
    indexShoesRight++;
  } else {
    indexShoesRight = 0;
  }
  var element = document.getElementById("mainshoes");
  element.setAttribute("src", tab_shoes[indexShoesMain]);
  element = document.getElementById("leftshoes");
  element.setAttribute("src", tab_shoes[indexShoesLeft]);
  element = document.getElementById("rightshoes");
  element.setAttribute("src", tab_shoes[indexShoesRight]);
}

function decrementShoes() {
  if (indexShoesMain > 0) {
    indexShoesMain--;
  } else {
    indexShoesMain = tab_shoes.length - 1;
  }
  if (indexShoesLeft > 0) {
    indexShoesLeft--;
  } else {
    indexShoesLeft = tab_shoes.length - 1;
  }
  if (indexShoesRight > 0) {
    indexShoesRight--;
  } else {
    indexShoesRight = tab_shoes.length - 1;
  }
  var element = document.getElementById("mainshoes");
  element.setAttribute("src", tab_shoes[indexShoesMain]);
  element = document.getElementById("leftshoes");
  element.setAttribute("src", tab_shoes[indexShoesLeft]);
  element = document.getElementById("rightshoes");
  element.setAttribute("src", tab_shoes[indexShoesRight]);
}
export default App;
