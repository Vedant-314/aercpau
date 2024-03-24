const mongoose = require("mongoose");

const fileDetailSchema = new mongoose.Schema(
  {
    pdf: String,
    title: String,
    fileType: String,
    author: String,
    year: String,
  },
  { collection: "fileDetails" }
);

mongoose.model("fileDetails", fileDetailSchema);
