import React from "react";
import "./wardrobe.css";
const Wardrobe = () => {
  return (
    <body>
      <div className="home-section">
        <h1 className="logotitle">W@rdrobe</h1>
        <div className="container">
          <div className="banner">
            <div className="titlebanner blacker">
              The modern way
              <br />
              to style yourself.
            </div>
            <div className="descbanner blacker">
              We are bringing a digital experience to the
              <br />
              fashion world.
            </div>
            <a href="/tryon">
              <button className="buttonbanner blacker">Try Now</button>
            </a>
          </div>
          <img className="mannequin" src={require("./img/femme.png")}></img>
        </div>
      </div>
    </body>
  );
};

export default Wardrobe;
