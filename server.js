const express = require("express");

const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

const PORT = 8000;

app.listen(8000, () => {
  console.log("listen on port " + PORT);
});
