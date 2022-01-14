import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import CustomizedButtons from "./Button";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        veet
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Main({ title }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Easily identify foods around
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="text.secondary"
              paragraph
            >
              Get all variety of foods you are looking for, from various eatries
              around you. View all eatries around, view their various menu,
              prices and easily contact them to place your order.
            </Typography>
            <div style={{ marginTop: 50, border: "1px solid #61C890" }}>
              <h3 style={{ textAlign: "center" }}>Veet Beta</h3>
              <Typography
                variant="h6"
                align="center"
                color="text.secondary"
                paragraph
              >
                Would you like to join the beta production? then download app
                from the section below.
              </Typography>
            </div>
            <h3 style={{ textAlign: "center", marginTop: 60 }}>Download App</h3>
            <div className="stack-btn">
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <a
                  style={{ textDecoration: "none" }}
                  href="https://firebasestorage.googleapis.com/v0/b/veet-de560.appspot.com/o/veet.apk?alt=media&token=8c927505-d5c8-4c4b-887f-55f5e51d3703"
                >
                  <CustomizedButtons title="Android" />
                </a>
                <CustomizedButtons title="iPhone" />
              </Stack>
              <Typography
                style={{ marginTop: 20 }}
                variant="h6"
                align="center"
                color="text.secondary"
                paragraph
              >
                Thank you for trying it out.
              </Typography>
            </div>
          </Container>
        </Box>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          <img
            style={{ width: 50, height: "auto" }}
            alt="logo"
            src="icon.png"
          />
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Find nearby eatries easily and contact them
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
