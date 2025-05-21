import React, { useContext, useState } from "react";
import './App.css';
import MovieSearch from "./MovieSearch";
import Favourites from "./Favourites";
import { ThemeContext } from "./context/ThemeContext";
import { FaSun, FaMoon } from 'react-icons/fa';

function App() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [activeTab, setActiveTab] = useState("search");

  return (
    <div className="App">
      <div className="theme-switch">
        <FaSun className="theme-icon" />
        <label className="switch">
          <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
          <span className="slider round"></span>
        </label>
        <FaMoon className="theme-icon" />
      </div>

      <h1>Movie Explorer</h1>

      <div className="tabs">
        <button
          className={`tab-button ${activeTab === "search" ? "active" : ""}`}
          onClick={() => setActiveTab("search")}
        >
          Szukaj
        </button>
        <button
          className={`tab-button ${activeTab === "favourite" ? "active" : ""}`}
          onClick={() => setActiveTab("favourite")}
        >
          Ulubione
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "search" && <MovieSearch />}
        {activeTab === "favourite" && <Favourites />}
      </div>
    </div>
  );
}

export default App;
