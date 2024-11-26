/* eslint-disable react/prop-types */
import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";

const Header = ({ title, text, isDashboard = false }) => {
  const Theme = useTheme();

  return (
    <>
      <Box sx={{ mb: isDashboard ? "0px" : "20px" }}>
        <h2 style={{ color: Theme.palette.primary.dark, margin: 3 }}>
          {title}
        </h2>
        <p
          style={{
            color: Theme.palette.text.primary,
            margin: 0,
            fontSize: "15px",
          }}
        >
          {text}
        </p>
      </Box>
    </>
  );
};

export { Header };
