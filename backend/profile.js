const express = require("express");
const fileUpload = require("express-fileupload");
const expressFileUpload = require("express-fileupload");
const router = express.Router();
const path = require("path");

const assetsFolder = path.join(__dirname, "assets");

router.use(fileUpload());

router.post("/profile", (req, res) => {
  const { file } = req.files;
  try {
    file.mv(path.join(assetsFolder, file.name));
    res.status(200).json({ message: "ok" });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

module.exports = router;
