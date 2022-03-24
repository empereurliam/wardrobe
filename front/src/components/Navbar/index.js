import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";
const Navbar = () => {
  return (
    <>
      <Nav className="navbar">
        <NavMenu>
          <NavLink to="/wardrobe" activeStyle className="logolink">
            W@rdrobe
          </NavLink>
          <NavLink to="/import" activeStyle className="internallink">
            Import
          </NavLink>
          <NavLink to="/tryon" activeStyle className="internallink">
            Try On
          </NavLink>
          <NavLink to="/about" activeStyle className="internallink">
            About
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;