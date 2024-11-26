import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import { Box, Stack } from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import { useTheme } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

// eslint-disable-next-line react/prop-types
const UpBar = ({ open, handleDrawerOpen, setMode }) => {
  const theme = useTheme();
  return (
    <>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: "none" },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search..."
            inputProps={{ "aria-label": "Search" }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <Box flexGrow={1}></Box>
          <Stack direction={"row"}>
            {theme.palette.mode === "light" ? (
              <IconButton
                aria-label="delete"
                size="large"
                color="inherit"
                onClick={() => {
                  setMode("dark");
                  localStorage.setItem("currentMode", "dark");
                }}
              >
                <DarkModeOutlinedIcon />
              </IconButton>
            ) : (
              <IconButton
                aria-label="delete"
                size="large"
                color="inherit"
                onClick={() => {
                  setMode("light");
                  localStorage.setItem("currentMode", "light");
                }}
              >
                <LightModeOutlinedIcon />
              </IconButton>
            )}
            <IconButton aria-label="delete" size="large" color="inherit">
              <NotificationsOutlinedIcon />
            </IconButton>
            <IconButton aria-label="delete" size="large" color="inherit">
              <SettingsOutlinedIcon />
            </IconButton>
            <IconButton aria-label="delete" size="large" color="inherit">
              <Person2OutlinedIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export { UpBar };
