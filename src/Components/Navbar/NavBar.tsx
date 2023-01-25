import React from "react";
import logo from "../../assets/images/logo.svg";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  NavbarContainer,
  NavbarLinkContainer,
  NavbarLink,
  ButtonLink,
  ExtendedNavbar,
  NavbarLinkExtended,
  StyledImg,
} from "./styles/NavbarStyle";
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
        <StyledImg src={logo} alt="logo" />
        <NavbarLink className="nav-link active" to="/home">
          Home
        </NavbarLink>
        <NavbarLink className="nav-link" to="/Movies">
          Movies
        </NavbarLink>
        <NavbarLink className="nav-link" to="/TV-Series">
          TV-Series
        </NavbarLink>
        <ButtonLink
          onClick={() => {
            setExtendNavbar((current) => !current);
          }}
        >
          {extendNavbar ? <>&#120143;</> : <>&#8801;</>}
        </ButtonLink>
      </NavbarLinkContainer>
      {extendNavbar && (
        <ExtendedNavbar>
          <NavbarLinkExtended className="nav-link active" to="/home">
            Home
          </NavbarLinkExtended>
          <NavbarLinkExtended className="nav-link" to="/Movies">
            Movies
          </NavbarLinkExtended>
          <NavbarLinkExtended className="nav-link" to="/TV-Series">
            TV-Series
          </NavbarLinkExtended>
        </ExtendedNavbar>
      )}
    </NavbarContainer>
  );
};
export default Navbar;
