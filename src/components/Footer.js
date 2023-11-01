import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer__top">
        Never submit passwords through Google Forms.
      </div>
      <div className="Footer__middle">
        This content is neither created nor endorsed by Google.{" "}
        <a href="#">Report Abuse</a> - <a href="#">Terms of Service</a> -{" "}
        <a href="#">Privacy Policy</a>
      </div>
      <div className="Footer__bottom">
        <span className="google">
          <img
            src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_dark_clr_74x24px.svg"
            alt="Google"
            height="24px"
            width="74px"
            className="googleIcon"
          />
        </span>
        &nbsp;<span className="forms">Forms</span>
      </div>
    </div>
  );
}

export default Footer;
