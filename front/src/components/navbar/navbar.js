import React, { useState, useEffect } from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="topnav">
      <ul className="liste">
        <li className="leftItem">
          <a href="/signOut">Sign out</a>
        </li>
        <li>
          <a href="/tryon">Try on</a>
        </li>
        <li>
          <a className="centerItem" href="/select">
            Select
          </a>
        </li>
        <li>
          <a href="/">
            <img src={require("../../pages/img/logo.png")}></img>
          </a>
        </li>
      </ul>
    </nav>
  );
}
