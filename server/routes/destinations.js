import express from "express";
import destinations from "../data.js";
import DestinationsController from '../controllers/destinations.js'

const router = express.Router()

router.get("/", DestinationsController.getDestinations)

router.get("/:id", (req, res) => {
  const destination = destinations.find(d => d.id === req.params.id)
  if (!destination) return res.status(404).json({ error: "Destination not found" })
  res.status(200).json(destination)
});

export default router
