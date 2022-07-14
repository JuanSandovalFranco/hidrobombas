const express = require("express");

const env = require("dotenv");

const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 10000;

app.listen(8000, () => {
  console.log("listen on port " + PORT);
});
