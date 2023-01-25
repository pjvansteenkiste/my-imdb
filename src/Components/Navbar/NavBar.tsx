import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  NavbarContainer,
  NavbarLinkContainer,
  NavbarLink,
  ButtonLink,
  ExtendedNavbar,
  NavbarLinkExtended,
} from "./styles/NavStyle";
export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = (props) => {
  const location = useLocation();
  useEffect(() => {
    setExtendNavbar(false);
  }, [location]);
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extend={extendNavbar}>
      <NavbarLinkContainer>
        <NavbarLink className="nav-link active" to="/home">
          Home
        </NavbarLink>
        <NavbarLink className="nav-link" to="/about">
          About Us
        </NavbarLink>
        <NavbarLink className="nav-link" to="/contact">
          Contact Us
        </NavbarLink>
        <ButtonLink
          onClick={() => {
            setExtendNavbar((current) => !current);
          }}
        >
          {extendNavbar ? <>&#1005;</> : <>&#8801;</>}
        </ButtonLink>
      </NavbarLinkContainer>
      {extendNavbar && (
        <ExtendedNavbar>
          <NavbarLinkExtended className="nav-link active" to="/home">
            Home
          </NavbarLinkExtended>
          <NavbarLinkExtended className="nav-link" to="/about">
            About Us
          </NavbarLinkExtended>
          <NavbarLinkExtended className="nav-link" to="/contact">
            Contact Us
          </NavbarLinkExtended>
        </ExtendedNavbar>
      )}
    </NavbarContainer>
  );
};
export default Navbar;
