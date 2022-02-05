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
    <Typography
      variant="body2"
      fontFamily="Dongle"
      fontSize="25px"
      color="text.secondary"
      align="center"
    >
      {"Copyright © "}
      <Link color="inherit" href="veetgh.herokuapp.com">
        veet
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Main() {
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
              fontFamily="Dongle"
              fontSize="60px"
              gutterBottom
            >
              Easily identify foods around
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="text.secondary"
              fontFamily="Dongle"
              fontSize="28px"
              paragraph
            >
              Get all variety of foods you are looking for, from various eatries
              around you. View all eatries around, view their various menu,
              prices and easily contact them to place your order.
            </Typography>
            <div
              style={{
                marginTop: 50,
                border: "1px solid #61C890",
                padding: "10px",
                paddingTop: "0px",
              }}
            >
              <h3
                style={{
                  textAlign: "center",
                  fontFamily: "Dongle",
                  fontSize: "35px",
                  marginBottom: "-5px",
                }}
              >
                Veet Beta
              </h3>
              <Typography
                variant="h6"
                align="center"
                color="text.secondary"
                fontFamily="Dongle"
                fontSize="28px"
                paragraph
              >
                Would you like to join the beta production? then download app
                from the section below.
              </Typography>
            </div>
            <h3
              style={{
                textAlign: "center",
                marginTop: 60,
                fontFamily: "Dongle",
                fontSize: "35px",
                marginBottom: "-10px",
              }}
              id="TryTheBetaApp"
            >
              Download App
            </h3>
            <div className="stack-btn">
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <a
                  style={{ textDecoration: "none" }}
                  href="https://firebasestorage.googleapis.com/v0/b/veet-de560.appspot.com/o/veet.apk?alt=media&token=4c38b228-c843-4da0-ba3b-3def81ce7ea0"
                >
                  <CustomizedButtons title="Android" />
                </a>
                <CustomizedButtons title="iPhone" execute="true" />
              </Stack>
              <Typography
                style={{ marginTop: 20 }}
                variant="h6"
                align="center"
                color="text.secondary"
                fontFamily="Dongle"
                fontSize="28px"
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
          fontFamily="Dongle"
          fontSize="28px"
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
