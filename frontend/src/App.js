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
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-zinc-900 text-white" : "bg-white text-black"
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

      <footer
        className={`bg-orange-500 ${
          isDarkMode ? "text-white" : "text-black"
        } py-6 px-6`}
      >
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default App;
