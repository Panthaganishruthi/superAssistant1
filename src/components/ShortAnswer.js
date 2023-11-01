import React from "react";
import "./ShortAnswer.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#673ab7", // Change this to your desired color
    },
  },
  typography: {
    // Customize the font size for the labels
    fontSize: 12.5, // Adjust the font size as needed
  },
});

function ShortAnswer() {
  return (
    <div className="ShortAnswer">
      <div className="sectionHeading">
        Short Answer <span className="red">*</span>
      </div>
      <div className="textfield">
        <ThemeProvider theme={theme}>
          <TextField
            fullWidth
            required
            id="standard-basic"
            label="Your answer"
            variant="standard"
            style={{ marginTop: "-7px" }}
          />
        </ThemeProvider>
      </div>
    </div>
  );
}

export default ShortAnswer;
