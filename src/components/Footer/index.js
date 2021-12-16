import React from "react";
import "./style.css";
import { Container } from "react-bootstrap";

function Footer() {

  return (
    <Container>
      <div className="footer text-center">
        <hr align="center" width="80%" weight="1pt"/>
            <a className="footerLinks" href="https://prepr.org/privacy-policy/" target="_blank" rel="noreferrer">Privacy Policy</a>
            <a className="footerLinks" href="https://prepr.org/terms-of-use/" target="_blank" rel="noreferrer">Terms of Use</a>
            <a className="footerLinks" href="https://intercom.help/preprme/en/" target="_blank" rel="noreferrer">Help Center</a>
      </div>
    </Container>
  );
}

export default Footer;