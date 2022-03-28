import React from "react";
import "./wardrobe.css";
const Wardrobe = () => {
  return (
    <div class="home-section">
      <body>
      <h1 className="logotitle">W@rdrobe</h1>
      <div class="container">
          <div class="banner">
            <div class="titlebanner">The modern way<br/>to style yourself.</div>
            <div class="descbanner">
              We are bringing a digital experience to the<br/>fashion world.
            </div>
            <a href="/tryon">
              <button className="buttonbanner" hre>Try Now</button>
            </a>
          </div>
          <img className="mannequin" src={require("./img/femme.png")}></img>
        </div>
      </body>
    </div>
  );
};

export default Wardrobe;
