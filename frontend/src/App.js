/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/navbar/Header";
import RestaurantList from "./components/food_restaurant_data/FoodDataList";
import Cart from "./components/cart/Cart";
import LoginPage from "./components/login/LoginPage";
import Footer from "./components/Footer";

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

      {/* footer */}
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}

export default App;
