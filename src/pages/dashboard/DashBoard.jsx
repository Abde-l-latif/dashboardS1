import { Box } from "@mui/material";
import { Header } from "../../components/HeaderName";
import { Row1 } from "./Row1";
import { Row2 } from "./Row2";
import { Row3 } from "./Row3";
import DownloadIcon from "@mui/icons-material/Download";
import { useTheme } from "@emotion/react";

const Dashboard = () => {
  const Theme = useTheme();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <Box>
          <Header
            title={"Dashboard"}
            text={"Welcome to your dashboard"}
            isDashboard={true}
          />
        </Box>
        <Box
          sx={{
            backgroundColor: Theme.palette.primary.dark,
            color: "white",
            display: "flex",
            gap: "5px",
            alignItems: "center",
            padding: "5px",
            width: "fit-content",
            textAlign: "right",
            borderRadius: "2px",
            cursor: "pointer",
          }}
        >
          <DownloadIcon />
          Download Reports
        </Box>
      </Box>
      <Row1 />
      <Row2 />
      <Row3 />
    </>
  );
};

export { Dashboard };
