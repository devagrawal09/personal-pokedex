import React from "react";

const Footer = ({ back, next, page }) => {
  return (
    <div className="footer">
      <div className="btn" onClick={back}>
        <h3 className="btn__text">Back</h3>
      </div>
      <div className="footer__page">Page {page + 1}</div>
      <div className="btn" onClick={next}>
        <h3 className="btn__text">Next</h3>
      </div>
    </div>
  );
};

export default Footer;
