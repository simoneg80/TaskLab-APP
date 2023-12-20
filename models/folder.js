const mongoose = require("mongoose");

const folderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  content: {
    type: String, 
  
  },
  
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  // Add more properties as needed
});

const Folder = mongoose.model("Folder", folderSchema);

module.exports = Folder;
