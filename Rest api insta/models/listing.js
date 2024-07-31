const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  profile: {
    type: String,
    default:
      "https://i.pinimg.com/736x/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg",
    set: (v) =>
      v === ""
        ? "https://i.pinimg.com/736x/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg"
        : v,
  },
  username: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },


});

const Listing = mongoose.model("account", listingSchema);
module.exports = Listing;