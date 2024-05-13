import React from "react";
import { useState } from "react";
import AppBarBeforeLogin from "./AppBarBeforeLogin";
import AppBarAfterLogin from "./AppBarAfterLogin";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import restaurants from "../data/dummyFoodData";

const Header = ({ toggleDarkMode, loggedIn, setLoggedIn }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // handleing search functionality
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    if (query.trim() !== "") {
      const results = restaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSearchItemClick = (restaurantName) => {
    setSearchQuery(restaurantName);
    setShowSuggestions(false);
    // You can perform further actions when a suggestion is clicked
  };

  // creating custom theme for header, font and bg-color changed here
  const customTheme = createTheme({
    typography: {
      fontFamily: "'Freeman', sans-serif",
    },
    palette: {
      primary: {
        main: "#ed6c21",
      },
    },
  });

  return (
    <ThemeProvider theme={customTheme}>
      <AppBar className="py-1" position="static">
        <Toolbar>
          <Typography variant="h3" component="div" style={{ flexGrow: 1 }}>
            <a href="/">Potato</a>
          </Typography>

          <div className="flex items-center gap-4">
            <div style={{ marginRight: "10px" }}>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="px-4 py-2 rounded-md focus:outline-none text-black"
                style={{ width: "200px", backgroundColor: "#fff" }}
              />
              {showSuggestions && (
                <div className="absolute top-full bg-white w-full border rounded-md border-gray-300 shadow-lg">
                  {searchResults.map((restaurant) => (
                    <div
                      key={restaurant.id}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                      style={{ color: "black" }}
                      onClick={() => handleSearchItemClick(restaurant.name)}
                    >
                      {restaurant.name}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* button to toggle dark/light mode */}
            <button
              className="bg-orange-600 hover:text-black hover:bg-white text-white rounded-md p-3 focus:outline-none"
              onClick={toggleDarkMode}
            >
              <Brightness4Icon />
            </button>

            {/* Logic to dynamically change header before and after login */}
            {loggedIn ? (
              <AppBarAfterLogin setLoggedIn={setLoggedIn} />
            ) : (
              <AppBarBeforeLogin />
            )}
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
