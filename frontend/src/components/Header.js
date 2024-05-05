import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4"; // Import Brightness4Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const theme = createTheme({
  palette: {
    primary: {
      main: "#333646", // Replace with your desired blue color
    },
    secondary: {
      main: "#808080", // Replace with your desired gray color
    },
  },
});

const Header = ({ toggleDarkMode, isLoggedIn }) => {
  // Use state to manage login status (replace with your actual logic)
  const [loggedIn, setLoggedIn] = useState(isLoggedIn); // Assuming isLoggedIn prop is passed

  const handleLogin = () => {
    setLoggedIn(true); // Simulate login (replace with actual login logic)
  };

  const handleLogout = () => {
    setLoggedIn(false); // Simulate logout (replace with actual logout logic)
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        className="bg-gray-800 shadow-md"
        position="static"
        style={{ height: "80px" }}
      >
        <Toolbar variant="dense">
          <Typography
            className="text-white py-5"
            variant="h6"
            component="div"
            style={{ flexGrow: 1 }}
          >
            POTATO
          </Typography>
          <button className="p-2 mr-4 bg-gray-700 hover:bg-gray-600 text-white rounded-md focus:outline-none">
            Search
          </button>
          <button
            className="p-2 mr-4 bg-gray-700 hover:bg-gray-600 text-white rounded-md focus:outline-none"
            onClick={toggleDarkMode}
          >
            <Brightness4Icon /> {/* Dark mode icon */}
          </button>
          {!loggedIn && ( // Conditionally render login/signup buttons if not logged in
            <>
              <button
                className="text-xl px-4 py-2 rounded-md pr-5"
                onClick={handleLogin}
              >
                Login
              </button>

              <button className="text-xl px-4 py-2 rounded-md">Signup</button>
            </>
          )}
          {loggedIn && ( // Conditionally render profile/cart buttons if logged in
            <>
              <AccountCircleIcon className="text-white mr-4" />{" "}
              {/* Profile icon */}
              <ShoppingCartIcon
                className="text-white"
                onClick={() => {
                  /* Handle cart click */
                }}
              />{" "}
              {/* Cart icon */}
              <button
                className="text-white text-xl px-4 py-2 rounded-md"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          )}
          <FontAwesomeIcon icon="fa-regular fa-cart-shopping" />{" "}
          {/* Remove this line (redundant) */}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
