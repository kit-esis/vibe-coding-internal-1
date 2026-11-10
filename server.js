const express = require("express");

const app = express();
app.set("view engine", "ejs");

const city = {
  name: "Hansestadt Osterburg (Altmark)",
  latitude: 52.78698,
  longitude: 11.75433,
  zoom: 14
};

app.get("/", (req, res) => {
  res.render("index", {
    title: city.name,
    cityName: city.name,
    latitude: city.latitude,
    longitude: city.longitude,
    zoom: city.zoom
  });
});

const port = Number(process.env.PORT) || 3000;

app.listen(port, "0.0.0.0", () => {
  console.log(`Stadtkarte für ${city.name} läuft auf Port ${port}`);
});
