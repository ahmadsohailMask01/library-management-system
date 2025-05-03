// routes/totalDownloadRoutes.js
const express = require("express");
const router = express.Router();
const {
  incrementTotalDownload,
  getTotalDownloads,
} = require("../controllers/totalDowloadsController");

router.post("/total-downloads", (req, res) => incrementTotalDownload(req, res));
router.get("/total-downloads", (req, res) => getTotalDownloads(req, res));

module.exports = router;
