import React from "react";
import "./TickBox.css";
import Checkbox from "@mui/material/Checkbox";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#673ab7", // Change this to your desired color
    },
  },
  typography: {
    // Customize the font size for the labels
    fontSize: 14, // Adjust the font size as needed
  },
});

function TickBox() {
  return (
    <div className="TickBox">
      <div className="sectionHeading">
        Multi choice Grid<span className="red">*</span>
      </div>
      <div className="TickBox__content">
        <div className="TickBox__row">
          <div className="TickBox__row__label"></div>
          <div className="TickBox__row__group">
            <div className="tickbox__text">Column 1</div>
            <div className="tickbox__text">Column 2</div>
            <div className="tickbox__text">Column 3</div>
          </div>
        </div>
        <div className="TickBox__row">
          <div className="TickBox__row__label tickbox__text">Row 1</div>
          <div className="TickBox__row__group">
            <ThemeProvider theme={theme}>
              <Checkbox />
            </ThemeProvider>
            <ThemeProvider theme={theme}>
              <Checkbox />
            </ThemeProvider>
            <ThemeProvider theme={theme}>
              <Checkbox />
            </ThemeProvider>
          </div>
        </div>
        <div className="TickBox__row">
          <div className="TickBox__row__label tickbox__text">Row 2</div>
          <div className="TickBox__row__group">
            <ThemeProvider theme={theme}>
              <Checkbox />
            </ThemeProvider>
            <ThemeProvider theme={theme}>
              <Checkbox />
            </ThemeProvider>
            <ThemeProvider theme={theme}>
              <Checkbox />
            </ThemeProvider>
          </div>
        </div>
        <div className="TickBox__row">
          <div className="TickBox__row__label tickbox__text">Row 3</div>
          <div className="TickBox__row__group">
            <ThemeProvider theme={theme}>
              <Checkbox />
            </ThemeProvider>
            <ThemeProvider theme={theme}>
              <Checkbox />
            </ThemeProvider>
            <ThemeProvider theme={theme}>
              <Checkbox />
            </ThemeProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TickBox;
