/* eslint-disable react/prop-types */
import { Box, Paper } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";
import { useTheme } from "@emotion/react";

export const Cart = ({ icon, number, text, increase, data, scheme }) => {
  const theme = useTheme();
  return (
    <>
      <Paper
        sx={{
          display: "flex",
          minWidth: "325px",
          justifyContent: "space-between",
          padding: "10px",
          height: "fit-content",
          flexGrow: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "10px",
            padding: 0,
            margin: 0,
          }}
        >
          <p style={{ color: theme.palette.secondary.main, margin: 0 }}>
            {icon}
          </p>
          <p style={{ margin: 0 }}>{number}</p>
          <p style={{ margin: 0 }}>{text}</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontWeight: 900,
          }}
        >
          <Box height={"90px"} width={"90px"}>
            <ResponsivePie
              data={data}
              margin={{ top: 80, right: 80, bottom: 80, left: 80 }}
              innerRadius={0.7}
              padAngle={0.7}
              cornerRadius={3}
              activeOuterRadiusOffset={8}
              enableArcLabels={false}
              enableArcLinkLabels={false}
              colors={{ scheme: scheme }}
              borderWidth={1}
              borderColor={{
                from: "color",
                modifiers: [["darker", 0.2]],
              }}
              theme={{
                text: {
                  fontSize: 11,
                  fill: "#333333",
                  outlineWidth: 0,
                  outlineColor: "transparent",
                },
                axis: {
                  domain: {
                    line: {
                      stroke: "#777777",
                      strokeWidth: 1,
                    },
                  },
                  legend: {
                    text: {
                      fontSize: 12,
                      fill: "#333333",
                      outlineWidth: 0,
                      outlineColor: "transparent",
                    },
                  },
                  ticks: {
                    line: {
                      stroke: "#777777",
                      strokeWidth: 1,
                    },
                    text: {
                      fontSize: 11,
                      fill: "#333333",
                      outlineWidth: 0,
                      outlineColor: "transparent",
                    },
                  },
                },
                grid: {
                  line: {
                    stroke: "#dddddd",
                    strokeWidth: 1,
                  },
                },
                legends: {
                  title: {
                    text: {
                      fontSize: 11,
                      fill: "#333333",
                      outlineWidth: 0,
                      outlineColor: "transparent",
                    },
                  },
                  text: {
                    fontSize: 11,
                    fill: "#333333",
                    outlineWidth: 0,
                    outlineColor: "transparent",
                  },
                  ticks: {
                    line: {},
                    text: {
                      fontSize: 10,
                      fill: "#333333",
                      outlineWidth: 0,
                      outlineColor: "transparent",
                    },
                  },
                },
                annotations: {
                  text: {
                    fontSize: 13,
                    fill: "#333333",
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1,
                  },
                  link: {
                    stroke: "#000000",
                    strokeWidth: 1,
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1,
                  },
                  outline: {
                    stroke: "#000000",
                    strokeWidth: 2,
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1,
                  },
                  symbol: {
                    fill: "#000000",
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1,
                  },
                },
                tooltip: {
                  wrapper: {},
                  container: {
                    background: "#ffffff",
                    color: "#333333",
                    fontSize: 12,
                  },
                  basic: {},
                  chip: {},
                  table: {},
                  tableCell: {},
                  tableCellValue: {},
                },
              }}
              defs={[
                {
                  id: "dots",
                  type: "patternDots",
                  background: "inherit",
                  color: "rgba(255, 255, 255, 0.3)",
                  size: 4,
                  padding: 1,
                  stagger: true,
                },
                {
                  id: "lines",
                  type: "patternLines",
                  background: "inherit",
                  color: "rgba(255, 255, 255, 0.3)",
                  rotation: -45,
                  lineWidth: 6,
                  spacing: 10,
                },
              ]}
            />
          </Box>
          <p style={{ margin: 0 }}>{increase}</p>
        </div>
      </Paper>
    </>
  );
};
