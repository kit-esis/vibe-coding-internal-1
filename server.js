const express = require("express");

const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", {
    title: "Stadtapp",
    message: "Hello World!"
  });
});

app.listen(3000, "0.0.0.0", () => {
  console.log(`Server läuft auf Port 3000`);
});
