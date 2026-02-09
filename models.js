const mongoose = require("mongoose");

const LeadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: String,
  status: {
    type: String,
    enum: ["new", "contacted", "converted"],
    default: "new"
  }
}, { timestamps: true }
);

module.exports = mongoose.model("Lead", LeadSchema);
