import React from "react";
import foodData from "../data/dummyFoodData";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
} from "@mui/material";

const FoodCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {foodData.map((food) => (
        <Card
          key={food.id}
          sx={{ maxHeight: 370 }}
          className="rounded shadow-lg"
        >
          <Box sx={{ display: "flex", height: "50%", width: "100%" }}>
            <CardMedia
              component="img"
              image={food.imageUrl}
              alt={food.name}
              className="object-cover transition duration-300 ease-in-out transform hover:scale-110"
            />
          </Box>

          <CardContent className="px-auto py-auto mt-2">
            <div className="flex justify-between items-center mb-2">
              {/* Use Typography component to apply Freeman font to food name */}
              <Typography variant="h5" component="div" className="font-bold">
                {food.name}
              </Typography>
              <Button variant="outlined" size="" color="primary">
                Add
              </Button>
            </div>

            <div
              className="flex justify-between items-center"
              style={{
                flexGrow: 1,
                fontFamily: "'Freeman', sans-serif",
                letterSpacing: "1px",
              }}
            >
              <Typography className="text-blue-500">{food.cuisine}</Typography>

              <p className="flex items-center">{food.price}</p>
            </div>

            <div className="flex text-left mt-2 text-green-700">
              {food.rating} {food.deliveryTime}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FoodCard;
