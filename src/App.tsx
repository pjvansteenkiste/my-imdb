import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviesPage from "./pages/Movies/Movies";
import HomePage from "./pages/home/home";
import TVSeriesPage from "./pages/TV-Series/TV-Series";
import Navbar from "./Components/Navbar/NavBar";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="Movies" element={<MoviesPage />} />
        <Route path="TV-series" element={<TVSeriesPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
