import Booking from "../models/Booking.js";

export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate("user trip");
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch bookings", error });
  }
};

export const createBooking = async (req, res) => {
  try {
    const { user, trip, amount, paymentMethod, paymentStatus } = req.body;

    const booking = new Booking({
      user,
      trip,
      amount,
      paymentMethod,
      paymentStatus,
    });

    const saved = await booking.save();
    res.status(201).json(saved);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to create booking", error: err.message });
  }
};
