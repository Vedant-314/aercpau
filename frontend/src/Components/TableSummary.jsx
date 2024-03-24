import React, { useState } from "react";
import { Table } from "antd";
import axios from "axios";
import Layout from "./Layout";
import { useEffect } from "react";

function TableSummary() {
  const [sumFiles, setSumFiles] = useState([]);

  useEffect(() => {
    getFiles();
  }, []);

  const getFiles = async () => {
    const sumResult = await axios.get(
      "http://localhost:5000/get-summary-files"
    );
    setSumFiles(sumResult.data.data);
  };

  const showFile = (pdf) => {
    window.open(`http://localhost:5000/files/${pdf}`, "_blank", "noreferrer");
  };

  const columns = [
    {
      title: "S.No.",
      key: "index",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Completed Studies",
      dataIndex: "title",
      onCell: (record) => {
        return {
          onClick: () => {
            showFile(record.pdf);
          },
        };
      },
    },
    {
      title: "Authors",
      dataIndex: "author",
    },
    {
      title: "Year of Completion",
      dataIndex: "year",
    },
  ];
  return (
    <Layout>
      <Table
        columns={columns}
        dataSource={sumFiles}
        style={{ cursor: "pointer" }}
      />
    </Layout>
  );
}

export default TableSummary;
