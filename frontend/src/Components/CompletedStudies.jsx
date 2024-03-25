import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import axios from "axios";

function CompletedStudies() {
  const [losFiles, setLosFiles] = useState([]);

  useEffect(() => {
    getFiles();
  }, []);

  const getFiles = async () => {
    const losResult = await axios.get(
      "https://aercpau.onrender.com/get-listofstudies-files"
    );
    setLosFiles(losResult.data.data);
  };

  const showFile = (pdf) => {
    window.open(`https://aercpau.onrender.com/files/${pdf}`, "_blank", "noreferrer");
  };

  return (
    <Layout>
      <h2>Completed Studies: </h2>
      <hr />
      <div className="cmp-content">
        <ul>
          <Link onClick={() => showFile(losFiles[0].pdf)}>
            <li>List of Studies</li>
          </Link>
          <Link to={"/tables"}>
            <li>Summary of studies</li>
          </Link>
          <Link to={"/tabler"}>
            <li>Reports</li>
          </Link>
        </ul>
      </div>
    </Layout>
  );
}

export default CompletedStudies;
