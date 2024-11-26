import { Box, Paper, Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { useTheme } from "@emotion/react";
import { Line } from "../linechart/Line";
import { dataTransaction } from "./data";
const Row2 = () => {
  const Theme = useTheme();
  return (
    <>
      <Stack
        style={{
          marginTop: "10px",
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        <Paper
          sx={{
            height: "400px",
            minWidth: "350px",
            flexGrow: 1,
            width: "70%",
          }}
        >
          <div
            style={{
              padding: "10px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p
                style={{
                  color: Theme.palette.secondary.main,
                  fontWeight: "700",
                }}
              >
                Revenue Generated
              </p>
              <p> $ 30,546</p>
            </div>
            <div style={{ marginTop: "20px" }}>
              <IconButton aria-label="delete" size="large">
                <DownloadOutlinedIcon />
              </IconButton>
            </div>
          </div>
          <Line isDashboad={true} />
        </Paper>

        <Box
          sx={{
            minWidth: "325px",
            width: "325px",
            height: "400px",
            overflow: "auto",
            flexGrow: 1,
          }}
        >
          <Paper>
            <p
              style={{
                color: Theme.palette.secondary.main,
                fontWeight: "700",
                padding: "10px",
                marginBottom: "10px",
                marginTop: "0",
              }}
            >
              Recent Transactions
            </p>
          </Paper>
          {dataTransaction.map((x) => {
            return (
              <>
                <Paper
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "5px",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <p style={{ fontWeight: 700 }}>{x.name}</p>
                  <p>{x.date}</p>
                  <div
                    style={{
                      backgroundColor: "red",
                      borderRadius: "5px",
                      height: "fit-content",
                      color: "white",
                    }}
                  >
                    <p style={{ margin: 0, padding: "5px" }}>{x.price}</p>
                  </div>
                </Paper>
              </>
            );
          })}
        </Box>
      </Stack>
    </>
  );
};

export { Row2 };
