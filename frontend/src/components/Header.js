import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { createTheme, Link, ThemeProvider } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import restaurants from "./dummyFoodData";

const Header = ({ toggleDarkMode, isLoggedIn }) => {
  const [loggedIn, setLoggedIn] = useState(isLoggedIn);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

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

  const customTheme = createTheme({
    typography: {
      fontFamily: "'Freeman', sans-serif", // Use Freeman font family
    },
    palette: {
      primary: {
        main: "#ed6c21", // Custom color for material ui button
      },
    },
  });

  return (
    <ThemeProvider theme={customTheme}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            className="text-white text-bold pt-3 pb-3 pl-5"
            variant="h3"
            component="div"
            style={{
              flexGrow: 1,
              fontFamily: "'Freeman', sans-serif",
            }}
          >
            Potato
          </Typography>

          <div className="flex items-center gap-4">
            <div
              className="flex items-center gap-4 relative"
              style={{ marginRight: "10px" }}
            >
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="px-4 py-2 rounded-md focus:outline-none text-black" // Set text color to black
                style={{ width: "200px", backgroundColor: "#fff" }} // Set background color to white
              />
              {showSuggestions && (
                <div className="absolute top-full bg-white w-full border rounded-md border-gray-300 shadow-lg">
                  {searchResults.map((restaurant) => (
                    <div
                      key={restaurant.id}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                      style={{ color: "black" }} // Set text color to black
                      onClick={() => handleSearchItemClick(restaurant.name)}
                    >
                      {restaurant.name}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              className="bg-orange-600 hover:text-black hover:bg-white text-white rounded-md p-3 focus:outline-none"
              onClick={toggleDarkMode}
            >
              <Brightness4Icon />
            </button>

            {!loggedIn ? (
              <>
                <button
                  className="text-white px-4 py-2 text-2xl bg-orange-600 hover:text-black hover:bg-white rounded-md p-3 focus:outline-none"
                  onClick={handleLogin}
                  style={{
                    flexGrow: 1,
                    fontFamily: "'Freeman', sans-serif",
                    letterSpacing: "1px",
                  }}
                >
                  Login
                </button>
                <button
                  style={{
                    flexGrow: 1,
                    fontFamily: "'Freeman', sans-serif",
                    letterSpacing: "1px",
                  }}
                  className="text-white px-4 py-2 text-2xl bg-orange-600 hover:bg-white hover:text-black rounded-md p-3 focus:outline-none"
                >
                  Signup
                </button>
              </>
            ) : (
              <>
                <AccountCircleIcon className="" />

                <Link href="/cart" className="text-white">
                  {/* <ShoppingCartIcon className="" /> */}
                  <button
                    className="text-white px-4 py-2 text-2xl bg-orange-600 hover:bg-white hover:text-black rounded-md p-3 focus:outline-none"
                    style={{ flexGrow: 1, fontFamily: "'Freeman', sans-serif" }}
                  >
                    Cart
                  </button>
                </Link>
                <button
                  className="text-white px-4 py-2 text-2xl bg-orange-600 hover:bg-white hover:text-black rounded-md p-3 focus:outline-none"
                  onClick={handleLogout}
                  style={{ flexGrow: 1, fontFamily: "'Freeman', sans-serif" }}
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
