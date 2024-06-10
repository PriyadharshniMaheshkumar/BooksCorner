import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

export const BooksInfo = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/albums`)
      .then((res) => {
        setRows(res.data);
      })
      .catch(function (error) {
        alert(error.message);
      });
  };

  const bookColumns = [
    { field: "id", headerName: "id", width: 90 },
    {
      field: "id",
      headerName: "Id",
      width: 400,
      editable: true
    },
    {
      field: "title",
      headerName: "Title",
      width: 500,
      editable: true
    }
  ];

  return (
    <div style={{ width: "100%" }}>
      <div style={{ height: "650px" }}>
        <DataGrid
          rows={rows}
          columns={bookColumns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
};
