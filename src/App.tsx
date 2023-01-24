import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import "reset-css";

const navigation = {
  brand: { name: "Navbar", to: "/" },
  links: [
    { name: "Movies", to: "/movies" },
    { name: "TV-series", to: "/tv-series" },
    { name: "Favorites", to: "/favorites" },
    { name: "Development", to: "/dev" },
    { name: "Contact", to: "/contact" },
  ],
};

class App extends Component {
  public render() {
    const { brand, links } = navigation;
    return (
      <div className="App">
        <NavBar brand={brand} links={links} />
      </div>
    );
  }
}

export default App;
