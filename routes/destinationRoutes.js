import express from "express";
import {
  getAllDestinations,
  createDestination,
} from "../controllers/destinationController.js";
const router = express.Router();

router.get("/", getAllDestinations);
router.post("/", createDestination);

export default router;
