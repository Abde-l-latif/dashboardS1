import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { ContactData } from "./Contact";
import { Header } from "../../components/HeaderName";

const ContactInfo = () => {
  const rows = ContactData;

  const columns = [
    {
      field: "id",
      headerName: "id",
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
      flex: 1,
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
      field: "Address",
      headerName: "Address",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "City",
      headerName: "City",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "ZipCode",
      headerName: "ZipCode",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "RegistrarId",
      headerName: "RegistrarId",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
  ];
  return (
    <>
      <Header
        title={"Contact Information"}
        text={"List of Contacts for Future Reference"}
      />
      <div style={{ height: 600, width: "98%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
        />
      </div>
    </>
  );
};

export { ContactInfo };
