import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4"; // Import Brightness4Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

const Header = ({ toggleDarkMode }) => {
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

          <button className="text-xl px-4 py-2 rounded-md pr-5">Login</button>

          <button className="text-xl px-4 py-2 rounded-md">Signup</button>

          <FontAwesomeIcon icon="fa-regular fa-cart-shopping" />
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
