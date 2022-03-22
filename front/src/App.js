import './App.css';
import React from 'react';
import styles from './App.css';
function App() {
  return (
    <div className='App'>
        <div className="parent1">
            <div className="header"><h1>E-Wardrobe</h1></div>
            <div className="body">
                <div className="mainhat"><img src={require("./clothes/hat1.png")}/></div>
                <div className="mainshirt"><img src={require("./clothes/tshirt1.png")}/></div>
                <div className="mainpants"><img src={require("./clothes/pants1.png")}/></div>
                <div className="mainshoes"><img src={require("./clothes/shoes1.png")}/></div>
                <div className="lefthat"><img className="imgside" src={require("./clothes/hat1.png")}/></div>
                <div className="leftshirt"><img className="imgside" src={require("./clothes/tshirt1.png")}/></div>
                <div className="leftpants"><img  className="imgside" src={require("./clothes/pants1.png")}/></div>
                <div className="leftshoes"><img  className="imgside" src={require("./clothes/shoes1.png")}/></div>
                <div className="righthat"><img  className="imgside" src={require("./clothes/hat1.png")}/></div>
                <div className="rightshirt"><img className="imgside"  src={require("./clothes/tshirt1.png")}/></div>
                <div className="rightpants"><img  className="imgside" src={require("./clothes/pants1.png")}/></div>
                <div className="rightshoes"><img  className="imgside" src={require("./clothes/shoes1.png")}/></div>
            </div>
            <div className="left">GAUCHE</div>
            <div className="right">DROITE</div>
        </div>
        <button onClick={addItem}>Add a clothe</button>
    </div>
  );
}

function addItem(){
    alert("Do you really want to add a clothe in your  E-Wardrobe ?")
}
export default App;
