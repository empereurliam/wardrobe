import React from 'react';
import "./wardrobe.css"
const Wardrobe = () => {
return (
	<div class="home-section">
	    <h1 class="logotitle"><a href="#">Wardrobe</a></h1>
	    <header><nav>
                            <li><a href="#">Import</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#"><img src={require("./img/logo.png")}></img></a></li>
                        </nav>
	    </header>
        <body>
            <div class="container">
                <div class="banner">
                    <div class="titlebanner">The modern way to style yourself.</div>
                    <div class="descbanner">We are bringing a digital experience to the fashion world.</div>
                    <button class="buttonbanner">Try Now</button>
                </div>
                <img src={require("./img/femme.png")}></img>
                <div class="arrows">
                    <div class="leftarrows">
                    </div>
                    <div class="rightarrows">
                    </div>
                </div>
            </div>
        </body>
    </div>
);
};

export default Wardrobe;

