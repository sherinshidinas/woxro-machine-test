import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="main">
        <h6>Interested In Delving Deeper Into The Project?</h6>
        <p>
          If you'd like to explore further details about our initiatives or any
          of our affiliated brands, don't hesitate to connect. You can reach out
          to us via email at <span>hello@abc.com</span> or give us a call at{" "}
          <span>+91 480 20802730.</span>
        </p>

        <div className="footer-buttons">
          <button className="black">Ring us on Skype</button>
          <button className="white">Contact Us</button>
        </div>
      </div>

      <p>© 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved</p>
    </div>
  );
};

export default Footer;
