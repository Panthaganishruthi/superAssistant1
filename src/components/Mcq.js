import React from "react";
import "./Mcq.css";
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

function Mcq() {
  return (
    <div className="Mcq">
      <div className="sectionHeading">
        MCQ <span className="red">*</span>
      </div>
      <ThemeProvider theme={theme}>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={
                <Radio sx={{ "& .MuiSvgIcon-root": { fontSize: 24 } }} />
              }
              label="Option 1"
            />
            <FormControlLabel
              value="male"
              control={
                <Radio sx={{ "& .MuiSvgIcon-root": { fontSize: 24 } }} />
              }
              label="Option 2"
            />
            <FormControlLabel
              value="other"
              control={
                <Radio sx={{ "& .MuiSvgIcon-root": { fontSize: 24 } }} />
              }
              label="Option 3"
            />
          </RadioGroup>
        </FormControl>
      </ThemeProvider>
    </div>
  );
}

export default Mcq;
