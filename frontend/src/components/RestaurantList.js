import React from "react";
import restaurants from "./dummyData";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
} from "@mui/material";

const RestaurantList = () => {
  return (
    <>
      <h1 className="textdecoration-8 text-5xl">Top dishes near you</h1>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {restaurants.map((restaurant) => (
          <Card key={restaurant.id} className="rounded shadow-lg">
            <Box sx={{ display: "flex", height: "70%" }}>
              {" "}
              {/* Container for flexbox layout */}
              <CardMedia
                component="img"
                image={restaurant.imageUrl}
                alt={restaurant.name}
                className="object-cover transition duration-200 ease-in-out transform hover:scale-110"
              />
            </Box>

            <CardContent className="flex-grow px-4 py-2">
              {" "}
              {/* <button className="text-lg">Add</button> */}
              {/* Flex-grow for remaining space */}
              <Typography
                variant="h4"
                component="div"
                className="font-bold w-full"
              >
                {restaurant.name}
                <Button className="">Add</Button>
              </Typography>
              <Typography variant="h6" color="text.secondary">
                {restaurant.cuisine}
              </Typography>
              <div className="flex items-center text-md text-green-600">
                <Typography variant="body2" component="span" className="ml-1">
                  {restaurant.rating}
                </Typography>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default RestaurantList;
