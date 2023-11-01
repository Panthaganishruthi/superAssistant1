import React from "react";
import "./LinearScale.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
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

function LinearScale() {
  return (
    <div className="LinearScale">
      <div className="sectionHeading">
        Linear Scale <span className="red">*</span>
      </div>
      <div className="LinearScale__content">
        <div className="worst">Worst</div>
        <ThemeProvider theme={theme}>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-form-control-label-placement"
              name="position"
            >
              <FormControlLabel
                value="1"
                control={<Radio />}
                label="1"
                labelPlacement="top"
              />
              <FormControlLabel
                value="2"
                control={<Radio />}
                label="2"
                labelPlacement="top"
              />
              <FormControlLabel
                value="3"
                control={<Radio />}
                label="3"
                labelPlacement="top"
              />
              <FormControlLabel
                value="4"
                control={<Radio />}
                label="4"
                labelPlacement="top"
              />
              <FormControlLabel
                value="5"
                control={<Radio />}
                label="5"
                labelPlacement="top"
              />
            </RadioGroup>
          </FormControl>
        </ThemeProvider>
        <div className="best">Best</div>
      </div>
    </div>
  );
}

export default LinearScale;
