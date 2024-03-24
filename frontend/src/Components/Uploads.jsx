import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Layout from "./Layout";

function Uploads() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [fileType, setFileType] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [allFiles, setAllFiles] = useState(null);

  useEffect(() => {
    getFiles();
  }, []);

  const getFiles = async () => {
    const result = await axios.get("http://localhost:5000/get-files");
    console.log(result.data.data);
    setAllFiles(result.data.data);
  };

  const showFile = (pdf) => {
    window.open(`http://localhost:5000/files/${pdf}`, "_blank", "noreferrer");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);
    formData.append("fileType", fileType);
    formData.append("author", author);
    formData.append("year", year);
    console.log(title, file, fileType, author, year);
    const result = await axios.post(
      "http://localhost:5000/upload-files",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    console.log(result);
  };
  return (
    <Layout>
      <form action="" onSubmit={onSubmit}>
        <div className="label">
          <label for="file" className="form-label">Choose file type:</label>
          <select
            id="file"
            name="file"
            onChange={(e) => setFileType(e.target.value)}
          >
            <option value="listofstudies">List of Studies</option>
            <option value="summary">Summary of studies</option>
            <option value="reports">Reports</option>
            <option value="presentStatus">Present status</option>
            <option value="publications">Publications</option>
          </select>
        </div>
        <div className="label">
          <label>Title: </label>
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="label">
          <label>Author: </label>
          <input
            type="text"
            placeholder="Author"
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="label">
          <label>Year of Completion: </label>
          <input
            type="text"
            placeholder="Year of Completion"
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <div className="label">
          <label>Choose File: </label>
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        
        <button type="submit">SUBMIT</button>
      </form>
    </Layout>
  );
}

export default Uploads;
