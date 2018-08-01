const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hola Mundo!</h1>");
});

app.post("/", (req, res) => {

});

app.listen(3000, () => console.log("Listening on port 3000!"));
