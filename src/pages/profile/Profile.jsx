import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { Header } from "../../components/HeaderName";

const Profile = () => {
  const [open, setOpen] = useState(false);

  const [select, setSelect] = useState("User");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const onSubmit = (data) => {
    console.log(data);
    handleClick();
  };

  return (
    <>
      <Header title={"Profile"} text="Create a New User Profile" />
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Stack sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <TextField
            sx={{ flex: 1 }}
            error={errors.firstName}
            label="FirstName"
            variant="filled"
            {...register("firstName", { required: true, minLength: 4 })}
            helperText="First name is required and min Length is 4"
          />
          <TextField
            sx={{ flex: 1 }}
            error={errors.LastName}
            label="LastName"
            variant="filled"
            {...register("LastName", { required: true, minLength: 4 })}
            helperText="Last name is required and min Length is 4"
          />
        </Stack>
        <TextField
          label="Email"
          error={errors.Email}
          variant="filled"
          {...register("Email", {
            required: true,
            pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
          })}
          helperText="Email Address required"
        />
        <TextField
          label="Phone Number"
          variant="filled"
          helperText="Morrocan Phone Number required"
          error={errors.PhoneNumber}
          {...register("PhoneNumber", {
            required: true,
            minLength: 10,
            maxLength: 10,
            pattern: /\d{2}\d{2}\d{2}\d{2}\d{2}/,
          })}
        />
        <TextField label="Address 1" variant="filled" />
        <TextField label="Address 2" variant="filled" />
        <FormControl variant="filled" sx={{ minWidth: 120 }}>
          <InputLabel>{select}</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={select}
            onChange={(e) => {
              setSelect(e.target.value);
            }}
          >
            <MenuItem value="User">User</MenuItem>
            <MenuItem value="Manager">Manager</MenuItem>
            <MenuItem value="Admin">Admin</MenuItem>
          </Select>
        </FormControl>

        <div style={{ textAlign: "right" }}>
          <Button type="submit" variant="contained">
            Create New User
          </Button>
        </div>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          User has been create seccessfully!
        </Alert>
      </Snackbar>
    </>
  );
};

export { Profile };
