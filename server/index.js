/* eslint-disable no-undef */
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");
const multer = require("multer");

const filename = "text.txt";

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, filename);
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === "text/plain") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

app.set("port", 3030);

app.use(cors());

app.use("uploads/", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/upload", upload.single("file"), (req, res, next) => {
  if (!req.file) {
    return res.status(415).json({ error: "Unsupported file format" });
  }
  return res.status(201).json({ message: "Upload was successful" });
});

app.get("/get", (req, res, next) => {
  try {
    const data = fs.readFileSync(`uploads/${filename}`, "utf8");
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

app.all("*", (req, res) => res.send(404).json({ error: "Not Found" }));

app.listen(app.get("port"), function() {
  console.log(`Environment: \nServer started on : http://localhost:3030`);
  console.log("***************** SERVER ***********************\n\n");
});
