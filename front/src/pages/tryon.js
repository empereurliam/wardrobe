import React, { useEffect, useState } from "react";
import axios from "axios";
import IconButton from "@mui/material/IconButton";
import ArrowLeftRoundedIcon from "@mui/icons-material/ArrowLeftRounded";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";

let tab_hats_temp = [];
let tab_tops_temp = [];
let tab_pants_temp = [];
let tab_shoes_temp = [];
const TryOn = () => {
  const [tabHats, setTabHats] = useState([]);
  const [tabHatsMainIndex, setTabHatsMainIndex] = useState(1);
  const [tabHatsLeftIndex, setTabHatsLeftIndex] = useState(0);
  const [tabHatsRightIndex, setTabHatsRightIndex] = useState(2);
  const [tabTops, setTabTops] = useState([]);
  const [tabTopsMainIndex, setTabTopsMainIndex] = useState(1);
  const [tabTopsLeftIndex, setTabTopsLeftIndex] = useState(0);
  const [tabTopsRightIndex, setTabTopsRightIndex] = useState(2);
  const [tabPants, setTabPants] = useState([]);
  const [tabPantsMainIndex, setTabPantsMainIndex] = useState(1);
  const [tabPantsLeftIndex, setTabPantsLeftIndex] = useState(0);
  const [tabPantsRightIndex, setTabPantsRightIndex] = useState(2);
  const [tabShoes, setTabShoes] = useState([]);
  const [tabShoesMainIndex, setTabShoesMainIndex] = useState(1);
  const [tabShoesLeftIndex, setTabShoesLeftIndex] = useState(0);
  const [tabShoesRightIndex, setTabShoesRightIndex] = useState(2);

  useEffect(() => {
    console.log("test");
    fetchHats();
    fetchTops();
    fetchPants();
    fetchShoes();
    console.log(tabHats.length);
  }, []);
  const fetchHats = () => {
    axios
      .get(
        "http://localhost:8080/api/users/" +
          sessionStorage.getItem("token") +
          "/clothes/HAT"
      )
      .then((res) => {
        res.data.map((hat_photo) => tab_hats_temp.push(hat_photo.photo));
        setTabHats(tab_hats_temp);
        setTabHatsMainIndex(tab_hats_temp.length > 1 ? 1 : 0);
        setTabHatsRightIndex(tab_hats_temp.length > 2 ? 2 : 0);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const fetchTops = () => {
    axios
      .get(
        "http://localhost:8080/api/users/" +
          sessionStorage.getItem("token") +
          "/clothes/TOP"
      )
      .then((res) => {
        res.data.map((top_photo) => tab_tops_temp.push(top_photo.photo));
        setTabTops(tab_tops_temp);
        setTabTopsMainIndex(tab_tops_temp.length > 1 ? 1 : 0);
        setTabTopsRightIndex(tab_tops_temp.length > 2 ? 2 : 0);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const fetchPants = () => {
    axios
      .get(
        "http://localhost:8080/api/users/" +
          sessionStorage.getItem("token") +
          "/clothes/PANTS"
      )
      .then((res) => {
        res.data.map((pant_photo) => tab_pants_temp.push(pant_photo.photo));
        setTabPants(tab_pants_temp);
        setTabPantsMainIndex(tab_pants_temp.length > 1 ? 1 : 0);
        setTabPantsRightIndex(tab_pants_temp.length > 2 ? 2 : 0);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const fetchShoes = () => {
    axios
      .get(
        "http://localhost:8080/api/users/" +
          sessionStorage.getItem("token") +
          "/clothes/SHOES"
      )
      .then((res) => {
        res.data.map((shoes_photo) => tab_shoes_temp.push(shoes_photo.photo));
        setTabShoes(tab_shoes_temp);
        setTabShoesMainIndex(tab_shoes_temp.length > 1 ? 1 : 0);
        setTabShoesRightIndex(tab_shoes_temp.length > 2 ? 2 : 0);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <body>
      <div className="App">
        <h1 className="logotitle">W@rdrobe</h1>
        <div className="resumeGroup">
          <h2 className="resume">
            Try your clothes here and get your style bro !
          </h2>
          <p className="resume">Click on the arrows to change elements.</p>
        </div>
        <div className="tryonGrid">
          <div className="clothes">
            <div className="mainhat">
              <img
                src={tabHats[tabHatsMainIndex]}
                alt=""
              />
            </div>
            <div className="mainshirt">
              <img
                src={tabTops[tabTopsMainIndex]}
                alt=""
              />
            </div>
            <div className="mainpants">
              <img
                src={tabPants[tabPantsMainIndex]}
                alt=""
              />
            </div>
            <div className="mainshoes">
              <img
                src={tabShoes[tabShoesMainIndex]}
                alt=""
              />
            </div>
            <div className="lefthat">
              <img
                className="imgside"
                src={tabHats[tabHatsLeftIndex]}
                alt=""
              />
            </div>
            <div className="leftshirt">
              <img
                className="imgside"
                src={tabTops[tabTopsLeftIndex]}
                alt=""
              />
            </div>
            <div className="leftpants">
              <img
                className="imgside"
                src={tabPants[tabPantsLeftIndex]}
                alt=""
              />
            </div>
            <div className="leftshoes">
              <img
                className="imgside"
                src={tabShoes[tabShoesLeftIndex]}
                alt=""
              />
            </div>
            <div className="righthat">
              <img
                className="imgside"
                src={tabHats[tabHatsRightIndex]}
                alt=""
              />
            </div>
            <div className="rightshirt">
              <img
                className="imgside"
                src={tabTops[tabTopsRightIndex]}
                alt=""
              />
            </div>
            <div className="rightpants">
              <img
                className="imgside"
                src={tabPants[tabPantsRightIndex]}
                alt=""
              />
            </div>
            <div className="rightshoes">
              <img
                className="imgside"
                src={tabShoes[tabShoesRightIndex]}
                alt=""
              />
            </div>
          </div>
          <div className="left">
            <div className="div1 mt-10">
              <IconButton
                className="arrow"
                aria-label="decrement"
                size="large"
                onClick={decrementHats}
              >
                <ArrowLeftRoundedIcon fontSize="inherit" />
              </IconButton>
            </div>
            <div className="div2 mt-10">
              <IconButton
                className="arrow"
                aria-label="decrement"
                size="large"
                onClick={decrementTops}
              >
                <ArrowLeftRoundedIcon fontSize="inherit" />
              </IconButton>
            </div>
            <div className="div3 mt-10">
              <IconButton
                className="arrow"
                aria-label="decrement"
                size="large"
                onClick={decrementPants}
              >
                <ArrowLeftRoundedIcon fontSize="inherit" />
              </IconButton>
            </div>
            <div className="div4 mt-10">
              <IconButton
                className="arrow"
                aria-label="decrement"
                size="large"
                onClick={decrementShoes}
              >
                <ArrowLeftRoundedIcon fontSize="inherit" />
              </IconButton>
            </div>
          </div>
          <div className="right">
            <div className="div1 mt-10">
              <IconButton
                className="arrow"
                aria-label="decrement"
                size="large"
                onClick={incrementHats}
              >
                <ArrowRightRoundedIcon fontSize="inherit" />
              </IconButton>
            </div>
            <div className="div2 mt-10">
              <IconButton
                className="arrow"
                aria-label="decrement"
                size="large"
                onClick={incrementTops}
              >
                <ArrowRightRoundedIcon fontSize="inherit" />
              </IconButton>
            </div>
            <div className="div3 mt-10">
              <IconButton
                className="arrow"
                aria-label="decrement"
                size="large"
                onClick={incrementPants}
              >
                <ArrowRightRoundedIcon fontSize="inherit" />
              </IconButton>
            </div>
            <div className="div4 mt-10">
              <IconButton
                className="arrow"
                aria-label="decrement"
                size="large"
                onClick={incrementShoes}
              >
                <ArrowRightRoundedIcon fontSize="inherit" />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </body>
  );

  function incrementHats() {
    tabHatsMainIndex < tabHats.length - 1
      ? setTabHatsMainIndex(tabHatsMainIndex + 1)
      : setTabHatsMainIndex(0);
    tabHatsLeftIndex < tabHats.length - 1
      ? setTabHatsLeftIndex(tabHatsLeftIndex + 1)
      : setTabHatsLeftIndex(0);
    tabHatsRightIndex < tabHats.length - 1
      ? setTabHatsRightIndex(tabHatsRightIndex + 1)
      : setTabHatsRightIndex(0);
  }

  function decrementHats() {
    tabHatsMainIndex > 0
      ? setTabHatsMainIndex(tabHatsMainIndex - 1)
      : setTabHatsMainIndex(tabHats.length - 1);
    tabHatsLeftIndex > 0
      ? setTabHatsLeftIndex(tabHatsLeftIndex - 1)
      : setTabHatsLeftIndex(tabHats.length - 1);
    tabHatsRightIndex > 0
      ? setTabHatsRightIndex(tabHatsRightIndex - 1)
      : setTabHatsRightIndex(tabHats.length - 1);
  }

  function incrementTops() {
    tabTopsMainIndex < tabTops.length - 1
      ? setTabTopsMainIndex(tabTopsMainIndex + 1)
      : setTabTopsMainIndex(0);
    tabTopsLeftIndex < tabTops.length - 1
      ? setTabTopsLeftIndex(tabTopsLeftIndex + 1)
      : setTabTopsLeftIndex(0);
    tabTopsRightIndex < tabTops.length - 1
      ? setTabTopsRightIndex(tabTopsRightIndex + 1)
      : setTabTopsRightIndex(0);
  }

  function decrementTops() {
    tabTopsMainIndex > 0
      ? setTabTopsMainIndex(tabTopsMainIndex - 1)
      : setTabTopsMainIndex(tabTops.length - 1);
    tabTopsLeftIndex > 0
      ? setTabTopsLeftIndex(tabTopsLeftIndex - 1)
      : setTabTopsLeftIndex(tabTops.length - 1);
    tabTopsRightIndex > 0
      ? setTabTopsRightIndex(tabTopsRightIndex - 1)
      : setTabTopsRightIndex(tabTops.length - 1);
  }

  function incrementPants() {
    tabPantsMainIndex < tabPants.length - 1
      ? setTabPantsMainIndex(tabPantsMainIndex + 1)
      : setTabPantsMainIndex(0);
    tabPantsLeftIndex < tabPants.length - 1
      ? setTabPantsLeftIndex(tabPantsLeftIndex + 1)
      : setTabPantsLeftIndex(0);
    tabPantsRightIndex < tabPants.length - 1
      ? setTabPantsRightIndex(tabPantsRightIndex + 1)
      : setTabPantsRightIndex(0);
  }

  function decrementPants() {
    tabPantsMainIndex > 0
      ? setTabPantsMainIndex(tabPantsMainIndex - 1)
      : setTabPantsMainIndex(tabPants.length - 1);
    tabPantsLeftIndex > 0
      ? setTabPantsLeftIndex(tabPantsLeftIndex - 1)
      : setTabPantsLeftIndex(tabPants.length - 1);
    tabPantsRightIndex > 0
      ? setTabPantsRightIndex(tabPantsRightIndex - 1)
      : setTabPantsRightIndex(tabPants.length - 1);
  }

  function incrementShoes() {
    tabShoesMainIndex < tabShoes.length - 1
      ? setTabShoesMainIndex(tabShoesMainIndex + 1)
      : setTabShoesMainIndex(0);
    tabShoesLeftIndex < tabShoes.length - 1
      ? setTabShoesLeftIndex(tabShoesLeftIndex + 1)
      : setTabShoesLeftIndex(0);
    tabShoesRightIndex < tabShoes.length - 1
      ? setTabShoesRightIndex(tabShoesRightIndex + 1)
      : setTabShoesRightIndex(0);
  }

  function decrementShoes() {
    tabShoesMainIndex > 0
      ? setTabShoesMainIndex(tabShoesMainIndex - 1)
      : setTabShoesMainIndex(tabShoes.length - 1);
    tabShoesLeftIndex > 0
      ? setTabShoesLeftIndex(tabShoesLeftIndex - 1)
      : setTabShoesLeftIndex(tabShoes.length - 1);
    tabShoesRightIndex > 0
      ? setTabShoesRightIndex(tabShoesRightIndex - 1)
      : setTabShoesRightIndex(tabShoes.length - 1);
  }
};

export default TryOn;
