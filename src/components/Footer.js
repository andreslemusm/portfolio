// REACT DEPENDENCIES
import React from 'react';
// import PropTypes from 'prop-types';

// STYLES DEPENDENCIES
import './styles/Footer.scss';

// POSIBLE IMPOROVEMENTS: DON'T BURN THE LICENSE, EMAIL, TEL
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__item">
        &copy; 2020 Andres Lemus. All Rights Reserved.
      </div>
      <div className="footer__item">
        <div className="footer__contact">
          Email:{' '}
          <a href="mailto:aclmadrid04@gmail.com" className="footer__link">
            aclmadrid04@gmail.com
          </a>
        </div>
        <div className="footer__contact">
          Tel:{' '}
          <a href="tel: +57 304 524 3112" className="footer__link">
            +57 304 524 3112
          </a>
        </div>
      </div>
    </footer>
  );
}

// Footer.propTypes = {
//   license: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   tel: PropTypes.string.isRequired,
// };
