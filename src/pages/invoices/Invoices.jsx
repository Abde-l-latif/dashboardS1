import { DataGrid } from "@mui/x-data-grid";
import { InvoicesData } from "./invoicesData";
import { Header } from "../../components/HeaderName";

const Invoices = () => {
  const rows = InvoicesData;

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
      field: "Phone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "Cost",
      headerName: "Cost",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "Date",
      headerName: "Date",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
  ];

  return (
    <>
      <Header title={"Invoices"} text={"List of Invoice Balances"} />
      <div style={{ height: 631, width: "98%" }}>
        <DataGrid rows={rows} columns={columns} checkboxSelection />
      </div>
    </>
  );
};

export { Invoices };
