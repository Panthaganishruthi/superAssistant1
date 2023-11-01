import React from "react";
import "./FileUpload.css";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          border: "1px solid #dadce0", // Change this to your desired border color
        },
      },
    },
  },
});

function FileUpload() {
  return (
    <div className="FileUpload">
      <div className="sectionHeading">
        File Upload <span className="red">*</span>
      </div>
      <ThemeProvider theme={theme}>
        <Button variant="outlined">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            className="uploadIcon"
          >
            <g transform="translate(-3, -3)">
              <path d="M6,14.25 L7.5,14.25 L7.5,16.5 L16.5,16.5 L16.5,14.25 L18,14.25 L18,16.5 C18,17.325 17.325,18 16.5,18 L7.5,18 C6.675,18 6,17.325 6,16.5 L6,14.25 Z M9.3075,10.8075 L11.25,8.8725 L11.25,15 L12.75,15 L12.75,8.8725 L14.6925,10.815 L15.75,9.75 L12,6 L8.25,9.75 L9.3075,10.8075 Z"></path>
              <path fill="none"></path>
            </g>
          </svg>
          &nbsp; Add file
        </Button>
      </ThemeProvider>
    </div>
  );
}

export default FileUpload;
