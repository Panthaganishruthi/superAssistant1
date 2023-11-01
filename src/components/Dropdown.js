import React from "react";
import "./Dropdown.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
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

function Dropdown() {
  const [choice, setChoice] = React.useState("");

  const handleChange = (event) => {
    setChoice(event.target.value);
  };
  return (
    <div className="Dropdown">
      <div className="sectionHeading">
        Drop down <span className="red">*</span>
      </div>
      <Box sx={{ minWidth: 120 }}>
        <ThemeProvider theme={theme}>
          <FormControl sx={{ minWidth: 170 }} size="large">
            <InputLabel id="demo-simple-select-label">Choose</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={choice}
              label="Choose"
              onChange={handleChange}
            >
              <MenuItem value={1}>Option 1</MenuItem>
              <MenuItem value={2}>Option 2</MenuItem>
              <MenuItem value={3}>Option 3</MenuItem>
            </Select>
          </FormControl>
        </ThemeProvider>
      </Box>
    </div>
  );
}

export default Dropdown;
