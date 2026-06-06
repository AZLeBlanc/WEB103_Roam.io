const express = require("express");
const destinations = require("./data")

const app = express();

app.use(express.static("./public"));


// ROUTES
app.get("/", (req, res) => {
  res.status(200).sendFile(__dirname + "/views/index.html");
});

app.get("/destinations", (req, res) => {
  res.status(200).json(destinations)
})

app.get("/destinations/:id", (req, res) => {
  const destination = destinations.find(d => d.id === req.params.id);
  if (!destination) return res.status(404).sendFile(__dirname + "/views/404.html");
  res.status(200).json(destination)
})

app.get("/destination/:id", (req, res) => {
  const destination = destinations.find(d => d.id === req.params.id);
  if (!destination) return res.status(404).sendFile(__dirname + "/views/404.html");
  res.status(200).sendFile(__dirname + "/views/detail.html");
});

//catchall
app.use( (req, res) => {
  res.status(404).sendFile(__dirname + "/views/404.html");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
