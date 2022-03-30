import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
const Navbar = () => {
  return (
    <>
      <Nav className="navbar">
        <NavMenu>
          <NavLink to="/wardrobe" activestyle="true" className="logolink">
            W@rdrobe
          </NavLink>
          <NavLink to="/import" activestyle="true" className="internallink">
            Import
          </NavLink>
          <NavLink to="/tryon" activestyle="true" className="internallink">
            Try On
          </NavLink>
          <NavLink to="/about" activestyle="true" className="internallink">
            About
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
