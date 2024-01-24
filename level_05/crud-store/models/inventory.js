const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  name: { type: String, require: true },
  description: String,
  price: { type: Number, require: true },
  quantity: { type: Number, default: 0 },
});

module.exports = mongoose.model("Post", postSchema);
