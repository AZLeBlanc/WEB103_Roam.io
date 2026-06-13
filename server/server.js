import './config/dotenv.js'
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import destinations from "./data.js";
import destinationsRouter from "./routes/destinations.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, "../client/src")));


// ROUTES
app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../client/views/index.html"));
});

app.use("/destinations", destinationsRouter);

app.get("/destination/:id", (req, res) => {
  const destination = destinations.find(d => d.id === req.params.id);
  if (!destination) return res.status(404).sendFile(path.join(__dirname, "../client/views/404.html"));
  res.status(200).sendFile(path.join(__dirname, "../client/views/detail.html"));
});

//catchall
app.use( (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "../client/views/404.html"));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
