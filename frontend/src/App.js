/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import RestaurantList from "./components/RestaurantList";
import Cart from "./components/Cart";
import LoginPage from "./components/LoginPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <>
      <div
        className={`min-h-screen ${
          isDarkMode ? "bg-zinc-800 text-white" : "bg-white text-black"
        }`}
      >
        <Header
          toggleDarkMode={toggleDarkMode}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
        />

        <main className="container mx-auto px-6 py-16">
          <Routes>
            <Route path="/" element={<RestaurantList />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/login"
              element={<LoginPage setLoggedIn={setLoggedIn} />}
            />
          </Routes>
        </main>
      </div>

      <footer
        className={`bg-orange-500 ${
          isDarkMode ? "text-white" : "text-black"
        } flex py-10`}
      >
        {/* Left-aligned section for Contact Us and About Us */}
        <div className="pl-5 mt-4">
          <a href="#" className="text-bold text-lg">
            Contact Us |
          </a>
          {/* <span className="mx-2 text-gray-400">|</span> */}
          <a href="#" className="text-bold text-lg ml-1 mr-5">
            About Us
          </a>
        </div>

        {/* Center-aligned section for company name */}
        <div className="px-64 text-center">
          <p
            className="text-5xl font-bold"
            style={{ flexGrow: 1, fontFamily: "'Freeman', sans-serif" }}
          >
            Potato
          </p>
          <p className="text-xl font-normal">@Delta6Labs Tech</p>
        </div>
        {/* Bottom-aligned section for rights text */}
        <p className="text-xl mt-5">All rights reserved @ 2024</p>
      </footer>
    </>
  );
}

export default App;
