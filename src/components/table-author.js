import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import CircularProgress from "@mui/material/CircularProgress";

export const AuthorsInfo = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        setRows(res.data);
      })
      .catch(function (error) {
        alert(error.message);
      });
  };

  const columns = [
    { field: "id", headerName: "id", width: 90 },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      editable: true
    },
    {
      field: "username",
      headerName: "User name",
      width: 150,
      editable: true
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      editable: true
    },
    {
      field: "phone",
      headerName: "Phone",
      type: "number",
      width: 150,
      editable: true
    },
    {
      field: "credential",
      headerName: "Credential",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.name || ""} - ${params.row.username || ""}`
    }
  ];

  return (
    <div style={{ width: "100%" }}>
      {rows.length === 0 ? (
        <div style={{ height: "400px", width: "1000px", paddingTop: "20px" }}>
          <CircularProgress />
        </div>
      ) : (
        <div style={{ height: "400px", width: "1000px", paddingTop: "20px" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
      )}
    </div>
  );
};
