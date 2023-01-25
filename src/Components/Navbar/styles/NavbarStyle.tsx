import { Link } from "react-router-dom";
import styled from "styled-components";
type NavbarProps = {
  extend: boolean;
};

const Theme = {
  colors: {
    bg: `#0a0903`,
    dark: `#24292e`,
    light: `#EEEEEE`,
    red: `#ff5851`,
    purple: `#a682ff`,
  },
  focus: {
    color: `#52d1dc`,
  },
  active: {
    color: ` #4e4187`,
  },
  fonts: {
    body: `Arial, Helvetica, sans-serif`,
    heading: `IBM Plex Sans, sans-serif`,
  },
};

export const NavbarContainer = styled("nav")<NavbarProps>`
  width: 100%;
  height: ${(props) => (props.extend ? "100vh" : "60px")};
  background-color: ${Theme.colors.bg};
  display: flex;
  flex-direction: column;
  padding: 1em;
  @media (min-width: 700px) {
    height: 60px;
  }
`;

export const NavbarLinkContainer = styled("div")`
  display: flex;
`;
export const NavbarLink = styled(Link)`
  color: ${Theme.colors.purple};
  font-size: x-large;
  font-family: ${Theme.fonts.heading};
  text-decoration: none;
  margin: 10px;
  &:hover,
  &:focus {
    color: ${Theme.focus.color};
  }
  &:active {
    color: ${Theme.active.color};
  }
  @media (max-width: 700px) {
    display: none;
  }
`;
export const NavbarLinkExtended = styled(Link)`
  color: ${Theme.colors.purple};
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  &:hover,
  &:focus {
    color: ${Theme.focus.color};
  }
  &:active {
    color: ${Theme.active.color};
  }
`;
export const ButtonLink = styled("button")`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: ${Theme.colors.purple};
  font-size: 45px;
  cursor: pointer;
  @media (min-width: 700px) {
    display: none;
  }
`;
export const ExtendedNavbar = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 700px) {
    display: none;
  }
`;
export const StyledImg = styled("img")`
  // width: 10%;
  height: 20px;
  display: flex;
  @media (max-width: 700px) {
    height: 60px;
    width: 20%;
  }
`;
