import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Restaurants from "./RestaurantsList";
import ExploreMenu from "./Explore_menu";
import FoodCard from "./FoodCard";

// Create custom theme with specified font family
const customTheme = createTheme({
  typography: {
    fontFamily: "'Freeman', sans-serif", // Use Freeman font family
  },
  palette: {
    primary: {
      main: "#ed6911", // Custom color for material ui button
    },
  },
});

const FoodDataList = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <>
        <div>
          <ExploreMenu />
          <Restaurants />
        </div>
        <br />
        <br />
        <h1
          className="textdecoration-8 text-5xl"
          style={{ flexGrow: 1, fontFamily: "'Freeman', sans-serif" }}
        >
          Top dishes near you
        </h1>
        <br />

        {/* render food details in card */}
        <FoodCard />
      </>
    </ThemeProvider>
  );
};

export default FoodDataList;
