import { Box, Paper } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Pie } from "../piechart/pie";
import { Bar } from "../barchart/bar";
import { Geo } from "../geochart/Geo";

const Row3 = () => {
  const Theme = useTheme();
  return (
    <>
      <Box
        sx={{
          mt: "10px",
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        <Paper
          style={{
            height: "400px",
            width: "30%",
            padding: "10px",
            minWidth: "325px",
          }}
        >
          <p style={{ color: Theme.palette.secondary.main, fontWeight: 900 }}>
            Campaign
          </p>
          <Pie isDashboard={true} />
          <h3 style={{ textAlign: "center" }}>$56,549 revenue generated</h3>
          <p style={{ textAlign: "center" }}>
            includes extra misc expenditures and costs
          </p>
        </Paper>

        <Paper
          sx={{
            width: "30%",
            padding: "10px",
            flexGrow: 1,
            minWidth: "325px",
            height: "400px",
          }}
        >
          <p style={{ color: Theme.palette.secondary.main, fontWeight: 900 }}>
            Sales quantity
          </p>
          <Bar isDashboard={true} />
        </Paper>

        <Paper
          sx={{
            width: "30%",
            padding: "10px",
            minWidth: "325px",
            flexGrow: 1,
            height: "400px",
          }}
        >
          <p style={{ color: Theme.palette.secondary.main, fontWeight: 900 }}>
            Geography Based Traffic
          </p>
          <Geo isDashboard={true} />
        </Paper>
      </Box>
    </>
  );
};

export { Row3 };
