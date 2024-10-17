// Rodapé do site

import React from 'react';
import '../styles/Footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()}
          <span className="footer-link"> UNITPAC</span>
          <span className="footer-separator"> | </span>
          <span className="footer-link">IFTO</span>
          <span className="footer-separator"> | </span>
          <span className="footer-link">PORTAIS</span>
        </p>
      </div>
      <div className="scrollable-div">
        {/* imagem */}
      </div>
    </footer>
  );
};


export default Footer;