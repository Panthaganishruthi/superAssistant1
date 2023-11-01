import React from "react";
import "./Checkbox.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Checkbox as Check } from "@mui/material";
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

function Checkbox() {
  return (
    <div className="Checkbox">
      <div className="sectionHeading">
        Checkbox <span className="red">*</span>
      </div>
      <ThemeProvider theme={theme}>
        <FormGroup>
          <FormControlLabel
            control={<Check sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }} />}
            label="Option 1"
            className="custom-label"
            style={{ marginBottom: "-6px" }}
          />
          <FormControlLabel
            control={<Check sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }} />}
            label="Option 2"
            className="custom-label"
            style={{ marginBottom: "-6px" }}
          />
          <FormControlLabel
            control={<Check sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }} />}
            label="Option 3"
            className="custom-label"
            style={{ marginBottom: "-6px" }}
          />
        </FormGroup>
      </ThemeProvider>
    </div>
  );
}

export default Checkbox;
