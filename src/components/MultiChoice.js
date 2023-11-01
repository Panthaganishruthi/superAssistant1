import React from "react";
import "./MultiChoice.css";
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

function MultiChoice() {
  return (
    <div className="MultiChoice">
      <div className="sectionHeading">
        Multi choice Grid<span className="red">*</span>
      </div>
      <div className="MultiChoice__content">
        <div className="MultiChoice__row">
          <div className="MultiChoice__row__label"></div>
          <div className="MultiChoice__row__radiogroup">
            <div className="multichoice__text">Column 1</div>
            <div className="multichoice__text">Column 2</div>
            <div className="multichoice__text">Column 3</div>
          </div>
        </div>
        <div className="MultiChoice__row">
          <div className="MultiChoice__row__label multichoice__text">Row 1</div>
          <ThemeProvider theme={theme} className="MultiChoice__row__radio">
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-form-control-label-placement"
                name="position"
                className="MultiChoice__row__radiogroup"
              >
                <FormControlLabel value="1" control={<Radio />} />
                <FormControlLabel value="2" control={<Radio />} />
                <FormControlLabel value="3" control={<Radio />} />
              </RadioGroup>
            </FormControl>
          </ThemeProvider>
        </div>
        <div className="MultiChoice__row">
          <div className="MultiChoice__row__label multichoice__text">Row 2</div>
          <ThemeProvider theme={theme} className="MultiChoice__row__radio">
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-form-control-label-placement"
                name="position"
                className="MultiChoice__row__radiogroup"
              >
                <FormControlLabel value="1" control={<Radio />} />
                <FormControlLabel value="2" control={<Radio />} />
                <FormControlLabel value="3" control={<Radio />} />
              </RadioGroup>
            </FormControl>
          </ThemeProvider>
        </div>
        <div className="MultiChoice__row">
          <div className="MultiChoice__row__label multichoice__text">Row 3</div>
          <ThemeProvider theme={theme} className="MultiChoice__row__radio">
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-form-control-label-placement"
                name="position"
                className="MultiChoice__row__radiogroup"
              >
                <FormControlLabel value="1" control={<Radio />} />
                <FormControlLabel value="2" control={<Radio />} />
                <FormControlLabel value="3" control={<Radio />} />
              </RadioGroup>
            </FormControl>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
}

export default MultiChoice;
