import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

import tripRoutes from "./routes/tripRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import destinationRoutes from "./routes/destinationRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/trips", tripRoutes);
app.use("/api/users", userRoutes);
app.use("/api/destinations", destinationRoutes);
app.use("/api/bookings", bookingRoutes);

// Health check route
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "Backend is live!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});
