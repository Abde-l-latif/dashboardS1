import { DataGrid } from "@mui/x-data-grid";
import { TeamData } from "../../MockData";
import { useTheme } from "@emotion/react";
import SecurityIcon from "@mui/icons-material/Security";
import AddModeratorOutlinedIcon from "@mui/icons-material/AddModeratorOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import { Header } from "../../components/HeaderName";

const Team = () => {
  const rows = TeamData;
  const Theme = useTheme();

  const columns = [
    {
      field: "id",
      headerName: "Id",
      width: 50,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "Name",
      headerName: "Name",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "Email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "Age",
      headerName: "Age",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "Phone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "Access",
      headerName: "Access",
      align: "center",
      headerAlign: "center",
      width: 120,

      renderCell: ({ row: { Access } }) => {
        return (
          <div
            style={{
              backgroundColor:
                Access == "Admin"
                  ? Theme.palette.primary.dark
                  : Access == "Manager"
                  ? Theme.palette.secondary.dark
                  : Theme.palette.success.main,
              borderRadius: 10,
              color: "white",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              justifyContent: "center",
              height: 40,
              marginTop: "5px",
            }}
          >
            {Access === "Admin" && <SecurityIcon fontSize="small" />}
            {Access === "Manager" && (
              <AddModeratorOutlinedIcon fontSize="small" />
            )}
            {Access === "User" && <LockOpenOutlinedIcon fontSize="small" />}
            {Access}
          </div>
        );
      },
    },
  ];

  return (
    <>
      <Header title={"Team"} text={"Managing the Team Members"} />
      <div style={{ height: 631, width: "98%" }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    </>
  );
};

export { Team };
