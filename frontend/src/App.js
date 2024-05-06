/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import RestaurantList from "./components/RestaurantList";
import Home from "./components/Home";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`min-h-screen ${isDarkMode ? "bg-black text-white" : "white"}`}
    >
      <header>
        <Home toggleDarkMode={toggleDarkMode} />
      </header>

      <main className="container mx-auto px-4 py-16">
        {/* <RestaurantList /> */}
        <Router>
          <Routes>
            <Route path="/" exact element={<RestaurantList />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </main>

      <footer className="bg-orange-500 text-white py-6 px-6">
        <div className="flex justify-between items-center mb-6">
          {/* Left-aligned section for Contact Us and About Us */}
          <div>
            <a href="#" className="text-bold text-lg">
              Contact Us
            </a>
            <span className="mx-2 text-gray-400">|</span>
            <a href="#" className="text-bold text-lg">
              About Us
            </a>
          </div>

          {/* Center-aligned section for company name */}
          <div className="text-center">
            <p
              className="text-3xl font-bold"
              style={{ flexGrow: 1, fontFamily: "'Freeman', sans-serif" }}
            >
              Potato
            </p>
            <p className="text-xl font-normal">@Delta6Labs Tech</p>
          </div>
        </div>

        {/* Bottom-aligned section for rights text */}
        <p className="text-xl text-center">All rights reserved @ 2024</p>
      </footer>
    </div>
  );
}

export default App;
