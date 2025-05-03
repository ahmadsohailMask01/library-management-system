// models/TotalDownload.js
const mongoose = require("mongoose");

const TotalDownloadSchema = new mongoose.Schema({
  downloads: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("TotalDownload", TotalDownloadSchema);
