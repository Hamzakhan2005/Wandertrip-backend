const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    walletBalance: {
      type: Number,
      default: 0,
    },
    trips: [{ type: mongoose.Schema.Types.ObjectId, ref: "Trip" }],
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
