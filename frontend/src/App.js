import React, { useState } from "react";
import RestaurantList from "./components/RestaurantList";
import Home from "./components/Home";
import "./styles.css"; // Import your global CSS file (optional)

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100"
      }`}
    >
      <header>
        <Home toggleDarkMode={toggleDarkMode} />{" "}
        {/* Pass toggleDarkMode as prop */}
      </header>
      <main className="container mx-auto px-4 py-16">
        <RestaurantList />
      </main>
      <footer className="bg-gray-800 text-white py-4 px-6 flex justify-center items-center">
        <p>Potato - All rights are reserved @ 2024</p>
      </footer>
    </div>
  );
}

export default App;
