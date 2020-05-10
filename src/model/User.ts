const mongoose = require("mongoose");
export const User = mongoose.model("User", {
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  confirmed: { type: Boolean, default: false },
});
