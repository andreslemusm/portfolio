// REACT DEPENDENCIES
import React from "react";

// STYLES DEPENDENCIES
import "./index.scss";

// POSIBLE IMPOROVEMENTS: DON'T BURN THE LICENSE, EMAIL, TEL
export const Footer = (): JSX.Element => {
  return (
    <footer className="footer">
      <div className="footer__item">
        &copy; 2020 Andres Lemus. All Rights Reserved.
      </div>
      <div className="footer__item">
        <div className="footer__contact">
          Email:{" "}
          <a href="mailto:aclmadrid04@gmail.com" className="footer__link">
            aclmadrid04@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};
