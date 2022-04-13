import React, { useEffect, useState } from "react";
import axios from "axios";
import App from "../App";

const Select = () => {
  const [hats, setHats] = useState([]);
  const [tops, setTops] = useState([]);
  const [pants, setPants] = useState([]);
  const [shoes, setShoes] = useState([]);
  const [hatsSelected, setHatsSelected] = useState([]);
  const [topsSelected, setTopsSelected] = useState([]);
  const [pantsSelected, setPantsSelected] = useState([]);
  const [shoesSelected, setShoesSelected] = useState([]);

  const handleClick = (tabSelected, setSelected, id) => {
    const dict_temp = tabSelected;
    dict_temp[id] = !dict_temp[id];
    setSelected(dict_temp);
    if (tabSelected[id]) {
      console.log("selected");
      document.getElementById(id).style.border = "3px solid";
    } else {
      console.log("not selected");
      document.getElementById(id).style.border = "1px solid";
    }
  };

  useEffect(() => {
    fetchHats();
    fetchTops();
    fetchPants();
    fetchShoes();
  }, []);
  const fetchHats = () => {
    axios
      .get("http://localhost:8080/api/clothes/HAT")
      .then((res) => {
        setHats(res.data);
        const dict_temp = [];
        res.data.map((hat) => {
          dict_temp[hat.id] = false;
          console.log("on ajoute");
        });
        setHatsSelected(dict_temp);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const fetchTops = () => {
    axios
      .get("http://localhost:8080/api/clothes/TOP")
      .then((res) => {
        setTops(res.data);
        console.log(tops);
        const dict_temp = [];
        res.data.map((top) => {
          dict_temp[top.id] = false;
          console.log("on ajoute");
        });
        setTopsSelected(dict_temp);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const fetchPants = () => {
    axios
      .get("http://localhost:8080/api/clothes/PANTS")
      .then((res) => {
        setPants(res.data);
        const dict_temp = [];
        res.data.map((pants) => {
          dict_temp[pants.id] = false;
          console.log("on ajoute");
        });
        setPantsSelected(dict_temp);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const fetchShoes = () => {
    axios
      .get("http://localhost:8080/api/clothes/SHOES")
      .then((res) => {
        setShoes(res.data);
        const dict_temp = [];
        res.data.map((shoes) => {
          dict_temp[shoes.id] = false;
          console.log("on ajoute");
        });
        setShoesSelected(dict_temp);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="select_clothes w-70">
      <div className="hats">
        <h2>Select your HATS</h2>
        <div className="item-container">
          {hats.map((hats) => (
            <div
              className="hat_item"
              id={hats.id}
              onClick={() =>
                handleClick(hatsSelected, setHatsSelected, hats.id)
              }
            >
              <img src={hats.photo} />
              <p className="mt-1">{hats.brand}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="tops">
        <h2>Select your TOPS</h2>
        <div className="item-container">
          {tops.map((tops) => (
            <div
              className={"top_item"}
              id={tops.id}
              onClick={() =>
                handleClick(topsSelected, setTopsSelected, tops.id)
              }
            >
              <img src={tops.photo} />
              <p className="mt-1">{tops.brand}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="pants">
        <h2>Select your PANTS</h2>
        <div className="item-container">
          {pants.map((pants) => (
            <div
              className="pants_item"
              id={pants.id}
              onClick={() =>
                handleClick(pantsSelected, setPantsSelected, pants.id)
              }
            >
              <img src={pants.photo} />
              <p className="mt-1">{pants.brand}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="shoes">
        <h2>Select your SHOES</h2>
        <div className="item-container">
          {shoes.map((shoes) => (
            <div
              className="shoes_item"
              id={shoes.id}
              onClick={() =>
                handleClick(shoesSelected, setShoesSelected, shoes.id)
              }
            >
              <img src={shoes.photo} />
              <p className="mt-1">{shoes.brand}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Select;
