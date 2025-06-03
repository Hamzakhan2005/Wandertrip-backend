import Trip from "../models/Trip.js";

export const getTrips = async (req, res) => {
  try {
    const trips = await Trip.find({});
    res.json(trips);
  } catch (error) {
    res.status(500).json({ message: "Error fetching trips", error });
  }
};

export const createTrip = async (req, res) => {
  try {
    const newTrip = new Trip(req.body);
    const savedTrip = await newTrip.save();
    res.status(201).json(savedTrip);
  } catch (error) {
    res.status(500).json({ message: "Error creating trip", error });
  }
};
