import { Component } from "react";

export const Footer = () => {
  return (
    <>
      <div className="footer-top">
        <div className="footer-heading">
          <div className="footer-title">Books Gallery</div>
          <div className="footer-subtitle">Art of Reading !!</div>
        </div>
        <div className="footer-contact">
          <div className="mailcont">
            <div className="mailtext">mail@library.com</div>
          </div>
          <div className="locationcont">
            <div className="locationtext">
              PO Box 100, XYZ street, west side, Coimbatore
            </div>
          </div>
          <div className="phonecont">
            <div className="phonetext">+91 90123 45678</div>
          </div>
        </div>
      </div>
      <div className="footer-cont">
        <div className="footeritems">
          <div className="footeritem">
            <div className="itemtitle">HOME</div>
            <div className="item">Agency</div>
            <div className="item">Business</div>
          </div>
          <div className="footeritem">
            <div className="itemtitle">PAGES</div>
            <div className="item">About Us</div>
            <div className="item">Service</div>
          </div>
          <div className="footeritem">
            <div className="itemtitle">PORFOLIO</div>
            <div className="item">Books Gallery</div>
            <div className="item">Novel Gallery</div>
          </div>
          <div className="footeritem">
            <div className="itemtitle">FOLLOW US</div>
            <div className="icons"></div>
            <div className="itemtitle">Get A Quote</div>
            <div className="request">
              <input type="submit" className="footerbutton" value="Request" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bootom">
        <div className="footer-term">
          <div className="policy">PRIVATE POLICY</div>
          <div className="condition">TERMS & CONDITIONS</div>
        </div>
        <div className="footer-copyright">
          2020 Yg photography.All rights are received.
        </div>
      </div>
    </>
  );
};
