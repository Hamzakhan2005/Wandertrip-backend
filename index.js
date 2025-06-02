const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const Booking = require("./models/Booking");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Health check route
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "Backend is live!" });
});
app.get("/api/test-booking", async (req, res) => {
  try {
    const newBooking = new Booking({
      user: "665a1234c9e9b1f4a3d2e678",
      trip: "665b5678e2c5a3f8d9f4c123",
      amount: 1500,
      paymentStatus: "pending",
      paymentMethod: "upi",
    });

    await newBooking.save();
    res.status(200).json({ success: true, booking: newBooking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});
