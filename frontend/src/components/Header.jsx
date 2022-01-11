import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./styles.css";
import CustomizedButtons from "./Button";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="transparent" position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img
              style={{ width: 50, height: "auto" }}
              alt="logo"
              src="icon.png"
            />
          </Typography>
          <CustomizedButtons title="Be a user?" />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
