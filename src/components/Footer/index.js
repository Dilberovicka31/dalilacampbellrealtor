import { MDBContainer, MDBFooter } from "mdbreact";
import React from "react";
import "./index.css";

function Footer() {
  return (
    <MDBFooter className="font-small">
      <div className="footer-copyright text-center py-3 black-text">
        <MDBContainer fluid >
          &copy; {new Date().getFullYear()} Copyright: Mia Dilberovic
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}
export default Footer;
