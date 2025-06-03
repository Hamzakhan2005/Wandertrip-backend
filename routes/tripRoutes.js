import express from "express";
import { getTrips, createTrip } from "../controllers/tripController.js";

const router = express.Router();

router.route("/").get(getTrips).post(createTrip);

export default router;
