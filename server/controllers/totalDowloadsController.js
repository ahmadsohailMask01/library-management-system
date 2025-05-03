// controllers/totalDownloadController.js
const TotalDownload = require("../models/downloads");

const incrementTotalDownload = async (req, res) => {
  try {
    const result = await TotalDownload.findOneAndUpdate(
      {}, // only one document
      { $inc: { downloads: 1 } },
      { new: true, upsert: true }
    );
    res.json(result);
  } catch (err) {
    console.error("Error incrementing total downloads:", err);
    res.status(500).json({ error: "Server error" });
  }
};

const getTotalDownloads = async (req, res) => {
  try {
    const result = await TotalDownload.findOne({});
    res.json({ downloads: result?.downloads || 0 });
  } catch (err) {
    console.error("Error fetching total downloads:", err);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  incrementTotalDownload,
  getTotalDownloads,
};
