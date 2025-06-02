const Booking = require("./models/Booking"); // adjust path as needed

app.get("/api/test-booking", async (req, res) => {
  try {
    const newBooking = new Booking({
      userId: "1234567890abcdef",
      tripId: "abcdef1234567890",
      status: "confirmed",
      amountPaid: 5000,
    });

    await newBooking.save();
    res.status(200).json({ success: true, booking: newBooking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
});
