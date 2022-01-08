import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="transparent" position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img style={{ width: 50, height: "auto" }} src="icon.png" />
          </Typography>
          <Button size="small" textTransform="none" href="#" color="inherit">
            Login
          </Button>
          <Button size="small" textTransform="none" href="#" color="inherit">
            SignUp
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
