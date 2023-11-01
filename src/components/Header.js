import React from "react";
import "./Header.css";
import CloudDoneOutlinedIcon from "@mui/icons-material/CloudDoneOutlined";

function Header() {
  return (
    <div className="Header">
      <div className="title">Assignment Task</div>
      <div className="Header__middle">
        <div className="Header__middle__top">
          <div className="Header__middle__top__left">
            26abhaykumarsingh@gmail.com{" "}
            <span className="link">Switch account</span>
          </div>
          <div className="Header__middle__top__left">
            <CloudDoneOutlinedIcon />
          </div>
        </div>
        <div className="Header__middle__bottom">
          The name and photo associated with your Google account will be
          recorded when you upload files and submit this form. Your email is not
          part of your response.
        </div>
      </div>
      <div className="Header__bottom">* Indicates required question</div>
    </div>
  );
}

export default Header;
