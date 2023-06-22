import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="address">
          <h4>Address:</h4>
          <p>81- B/17 MIDC, General Block 
            Bhosari, Pune-411026
          </p>
        </div>
        <div className="email">
          <h4>Email:</h4>
          <p>amimeditex@gmail.com</p>
        </div>
        <div className="directors">
          <h4>Reach out to our directors:</h4>
          <ul>
            <li>
              Mr. Avinash Alekar (Mobile: +919422027641)
            </li>
            <li>
              Mr. Milan Hakani (Mobile: +919371056734)
            </li>
            <li>
              Mr. Sangam Hakani (Mobile: +919371281011)
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
