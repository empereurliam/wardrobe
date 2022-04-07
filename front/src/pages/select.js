import React, { useEffect, useState } from "react";
import axios from "axios";

const Select = () => {
  const [hats, setHats] = useState([]);
  const [tops, setTops] = useState([]);
  const [pants, setPants] = useState([]);
  const [shoes, setShoes] = useState([]);

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
            <div className="hat_item">
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
            <div className="top_item">
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
                  <div className="pants_item">
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
                  <div className="shoes_item">
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
