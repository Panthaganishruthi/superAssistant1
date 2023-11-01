import React from "react";
import "./Submit.css";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#673ab7", // Change this to your desired color
    },
  },
  typography: {
    // Customize the font size for the labels
    fontSize: 13, // Adjust the font size as needed
  },
});

function Submit() {
  return (
    <div className="Submit">
      <ThemeProvider theme={theme}>
        <Button variant="contained">
          &nbsp;&nbsp;&nbsp;Submit&nbsp;&nbsp;&nbsp;
        </Button>
      </ThemeProvider>
      <div className="Submit__middle">
        <div className="Submit__middle__left"></div>
        <div className="Submit__middle__right">Page 1 of 1</div>
      </div>
      <div className="Submit__right">Clear form</div>
    </div>
  );
}

export default Submit;
