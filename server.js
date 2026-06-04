const express = require("express");

const app = express();

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.status(200).sendFile(__dirname + "/views/index.html");
});

app.get("/destination/:id", (req, res) => {
  res.status(200).sendFile(__dirname + "/views/detail.html");
});

app.get("*", (req, res) => {
  res.status(404).sendFile(__dirname + "/views/404.html");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
