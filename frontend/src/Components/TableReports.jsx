import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "./Layout";

function TableReports() {
  const [reportFiles, setReportFiles] = useState([]);

  useEffect(() => {
    getFiles();
  }, []);

  const getFiles = async () => {
    const sumResult = await axios.get("http://localhost:5000/get-report-files");
    setReportFiles(sumResult.data.data);
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
        dataSource={reportFiles}
        style={{ cursor: "pointer" }}
      />
    </Layout>
  );
}

export default TableReports;
