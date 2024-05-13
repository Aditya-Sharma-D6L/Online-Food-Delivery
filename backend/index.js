const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./config/database");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(cors({ origin: "http://localhost:4000" }));

app.get("/", (req, res) => {
  res.send("<h1>Hello, this is node js server for food delivery app</h1>");
});

// syncing to database and listening to port
sequelize.sync().then(() => {
  console.log("Database synced");

  app.listen(port, () => {
    console.log(`Server is running on port ${port}!`);
  });
});
