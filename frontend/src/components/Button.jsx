import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 28,
  color: "#61C890",
  padding: "0px 10px",
  border: "1px solid",
  paddingTop: "2.5px",
  height: "35px",
  lineHeight: 1.5,
  backgroundColor: "#fff",
  borderColor: "#61C890",
  fontFamily: ["Dongle"].join(","),
  "&:hover": {
    backgroundColor: "#D6FFE9",
    borderColor: "#D6FFE9",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#43A771",
    borderColor: "#43A771",
  },
});

export default function CustomizedButtons({ title, execute }) {
  return (
    <Stack spacing={2} direction="row">
      <BootstrapButton
        variant="outlined"
        onClick={() => {
          execute === "true" && alert("AppStore app not ready yet.");
        }}
        disableRipple
      >
        {title}
      </BootstrapButton>
    </Stack>
  );
}
