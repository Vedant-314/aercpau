import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Layout from "./Layout";

function OnGoingStudies() {
  const [prstFiles, setPrstFiles] = useState();
  const [publiFiles, setPubliFiles] = useState();

  useEffect(() => {
    getFiles();
  }, []);

  const getFiles = async () => {
    const prstResult = await axios.get(
      "https://aercpau.onrender.com/get-presentstatus-files"
    );
    setPrstFiles(prstResult.data.data);

    const publiResult = await axios.get(
      "https://aercpau.onrender.com/get-publication-files"
    );
    setPubliFiles(publiResult.data.data);
  };

  const showFile = (pdf) => {
    window.open(`https://aercpau.onrender.com/files/${pdf}`, "_blank", "noreferrer");
  };

  return (
    <Layout>
      <h2>Ongoing Studies: </h2>
      <hr />
      <div className="cmp-content">
        <ul>
          <Link onClick={() => showFile(prstFiles[0].pdf)}>
            <li>Present Status</li>
          </Link>
          <Link onClick={() => showFile(publiFiles[0].pdf)}>
            <li>Publication</li>
          </Link>
        </ul>
      </div>
    </Layout>
  );
}

export default OnGoingStudies;
