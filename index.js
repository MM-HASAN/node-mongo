const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log(" listene por 3000");
});
app.get("/", (req, res) => {
  res.send("thank for calling");
});
