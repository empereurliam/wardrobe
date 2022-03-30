import React, { useState, useEffect } from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="topnav">
      <ul className="liste">
        <li>
          <a href="/import">Import</a>
        </li>
        <li>
          <a className="centerItem" href="/about">About us</a>
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
