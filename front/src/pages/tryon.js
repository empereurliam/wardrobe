import "./stylepages.css";
import React, { useEffect, useState } from "react";
import styles from "./stylepages.css";
import axios from "axios";
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
      .get("http://localhost:8080/api/clothes/HAT")
      .then((res) => {
        res.data.map((hat_photo) => tab_hats_temp.push(hat_photo.photo));
        setTabHats(tab_hats_temp);
        setTabHatsMainIndex(tab_hats_temp.length > 1 ? 1 : 0)
        setTabHatsRightIndex(tab_hats_temp.length > 2 ? 2 : 0)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const fetchTops = () => {
    axios
      .get("http://localhost:8080/api/clothes/TOP")
      .then((res) => {
        res.data.map((top_photo) => tab_tops_temp.push(top_photo.photo));
        setTabTops(tab_tops_temp);
        setTabTopsMainIndex(tab_tops_temp.length > 1 ? 1 : 0)
        setTabTopsRightIndex(tab_tops_temp.length > 2 ? 2 : 0)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const fetchPants = () => {
    axios
      .get("http://localhost:8080/api/clothes/PANTS")
      .then((res) => {
        res.data.map((pant_photo) => tab_pants_temp.push(pant_photo.photo));
        setTabPants(tab_pants_temp);
        setTabPantsMainIndex(tab_pants_temp.length > 1 ? 1 : 0)
        setTabPantsRightIndex(tab_pants_temp.length > 2 ? 2 : 0)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const fetchShoes = () => {
    axios
      .get("http://localhost:8080/api/clothes/SHOES")
      .then((res) => {
        res.data.map((shoes_photo) => tab_shoes_temp.push(shoes_photo.photo));
        setTabShoes(tab_shoes_temp);
        setTabShoesMainIndex(tab_shoes_temp.length > 1 ? 1 : 0)
        setTabShoesRightIndex(tab_shoes_temp.length > 2 ? 2 : 0)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <div className="void5" />
      <h2 className="Resume">Try your clothes here and get your style bro !</h2>
      <p className="Resume">Click on the arrows to change elements.</p>
      <div className="void20" />
      <div className="parent1">
        <div className="body">
          <div className="mainhat">
            <img
              id="mainhat"
              src={tabHats[tabHatsMainIndex]}
              alt="ERREUR, l'image n'a pas pu être trouvée"
            />
          </div>
          <div className="mainshirt">
            <img
              id="mainshirt"
              src={tabTops[tabTopsMainIndex]}
              alt="ERREUR, l'image n'a pas pu être trouvée"
            />
          </div>
          <div className="mainpants">
            <img
              id="mainpants"
              src={tabPants[tabPantsMainIndex]}
              alt="ERREUR, l'image n'a pas pu être trouvée"
            />
          </div>
          <div className="mainshoes">
            <img
              id="mainshoes"
              src={tabShoes[tabShoesMainIndex]}
              alt="ERREUR, l'image n'a pas pu être trouvée"
            />
          </div>
          <div className="lefthat">
            <img
              id="lefthat"
              className="imgside"
              src={tabHats[tabHatsLeftIndex]}
              alt="ERREUR, l'image n'a pas pu être trouvée"
            />
          </div>
          <div className="leftshirt">
            <img
              id="leftshirt"
              className="imgside"
              src={tabTops[tabTopsLeftIndex]}
              alt="ERREUR, l'image n'a pas pu être trouvée"
            />
          </div>
          <div className="leftpants">
            <img
              id="leftpants"
              className="imgside"
              src={tabPants[tabPantsLeftIndex]}
              alt="ERREUR, l'image n'a pas pu être trouvée"
            />
          </div>
          <div className="leftshoes">
            <img
              id="leftshoes"
              className="imgside"
              src={tabShoes[tabShoesLeftIndex]}
              alt="ERREUR, l'image n'a pas pu être trouvée"
            />
          </div>
          <div className="righthat">
            <img
              id="righthat"
              className="imgside"
              src={tabHats[tabHatsRightIndex]}
              alt="ERREUR, l'image n'a pas pu être trouvée"
            />
          </div>
          <div className="rightshirt">
            <img
              id="rightshirt"
              className="imgside"
              src={tabTops[tabTopsRightIndex]}
              alt="ERREUR, l'image n'a pas pu être trouvée"
            />
          </div>
          <div className="rightpants">
            <img
              id="rightpants"
              className="imgside"
              src={tabPants[tabPantsRightIndex]}
              alt="ERREUR, l'image n'a pas pu être trouvée"
            />
          </div>
          <div className="rightshoes">
            <img
              id="rightshoes"
              className="imgside"
              src={tabShoes[tabShoesRightIndex]}
              alt="ERREUR, l'image n'a pas pu être trouvée"
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

  function incrementHats() {
    console.log(tabHatsMainIndex);
    console.log(tabHatsLeftIndex);
    console.log(tabHatsRightIndex);
    tabHatsMainIndex < tabHats.length - 1
      ? setTabHatsMainIndex(tabHatsMainIndex + 1)
      : setTabHatsMainIndex(0);
    tabHatsLeftIndex < tabHats.length - 1
      ? setTabHatsLeftIndex(tabHatsLeftIndex + 1)
      : setTabHatsLeftIndex(0);
    tabHatsRightIndex < tabHats.length - 1
      ? setTabHatsRightIndex(tabHatsRightIndex + 1)
      : setTabHatsRightIndex(0);
    console.log(tabHatsMainIndex);
    console.log(tabHatsLeftIndex);
    console.log(tabHatsRightIndex);
  }

  function decrementHats() {
    console.log(tabHatsMainIndex);
    console.log(tabHatsLeftIndex);
    console.log(tabHatsRightIndex);
    tabHatsMainIndex > 0
      ? setTabHatsMainIndex(tabHatsMainIndex - 1)
      : setTabHatsMainIndex(tabHats.length - 1);
    tabHatsLeftIndex > 0
      ? setTabHatsLeftIndex(tabHatsLeftIndex - 1)
      : setTabHatsLeftIndex(tabHats.length - 1);
    tabHatsRightIndex > 0
      ? setTabHatsRightIndex(tabHatsRightIndex - 1)
      : setTabHatsRightIndex(tabHats.length - 1);
    console.log(tabHatsMainIndex);
    console.log(tabHatsLeftIndex);
    console.log(tabHatsRightIndex);
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
    console.log(tabTopsMainIndex);
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
    console.log(tabTopsMainIndex);
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
    console.log(tabPantsMainIndex);
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
    console.log(tabPantsMainIndex);
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
    console.log(tabShoesMainIndex);
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
    console.log(tabShoesMainIndex);
  }
};

export default TryOn;
