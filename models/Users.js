const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    name: {
      type: String,
    },

    dob: {
      type: Date,
    },
    email: {
      type: String,
    },
    number: {
      type: Number,
    },
  },
  {
    collection: "users",
  }
);

module.exports = mongoose.model("User", userSchema);
