const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());

app.use("/files", express.static("files"));

require("./fileDetails");
const fileDetailSchema = mongoose.model("fileDetails");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

const mongourl =
  "mongodb://vedanttaak:vedant2004@cluster0-shard-00-00.js1st.mongodb.net:27017,cluster0-shard-00-01.js1st.mongodb.net:27017,cluster0-shard-00-02.js1st.mongodb.net:27017/?ssl=true&replicaSet=atlas-vhai0z-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(mongourl)
  .then(() => {
    console.log("connected to database");
  })
  .catch((e) => console.log(e));

app.post("/upload-files", upload.single("file"), async (req, res) => {
  console.log(req.file);
  const title = req.body.title;
  const fileName = req.file.filename;
  const fileType = req.body.fileType;
  const author = req.body.author;
  const year = req.body.year;

  try {
    await fileDetailSchema.create({
      title: title,
      pdf: fileName,
      fileType: fileType,
      author: author,
      year: year,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.json({ status: error });
  }
});

app.get("/get-summary-files", async (req, res) => {
  try {
    fileDetailSchema.find({ fileType: "summary" }).then((data) => {
      res.send({ status: "ok", data: data.reverse() });
    });
  } catch (error) {
    res.json({ status: error });
  }
});

app.get("/get-report-files", async (req, res) => {
  try {
    fileDetailSchema.find({ fileType: "reports" }).then((data) => {
      res.send({ status: "ok", data: data.reverse() });
    });
  } catch (error) {
    res.json({ status: error });
  }
});

app.get("/get-listofstudies-files", async (req, res) => {
  try {
    fileDetailSchema.find({ fileType: "listofstudies" }).then((data) => {
      res.send({ status: "ok", data: data.reverse() });
    });
  } catch (error) {
    res.json({ status: error });
  }
});

app.get("/get-presentstatus-files", async (req, res) => {
  try {
    fileDetailSchema.find({ fileType: "presentStatus" }).then((data) => {
      res.send({ status: "ok", data: data.reverse() });
    });
  } catch (error) {
    res.json({ status: error });
  }
});

app.get("/get-publication-files", async (req, res) => {
  try {
    fileDetailSchema.find({ fileType: "publications" }).then((data) => {
      res.send({ status: "ok", data: data.reverse() });
    });
  } catch (error) {
    res.json({ status: error });
  }
});

app.get("/", async (req, res) => {
  res.send("success");
});

app.listen(5000, () => {
  console.log("Server started");
});
