import React from 'react';
import {BrowserRouter as Router, Link } from 'react-router-dom';
import './Foote.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className='div1'>
          <h4>social media</h4>

        <a href="https://www.facebook.com/">facebook</a>
        <a href="https://www.instagram.com">instagram</a>
        <a href="https://www.twitter.com">twitter</a>
        
        </div>
        <div className='div g2'>
          <h4>support</h4>
          <Router>
            
         <Link to="/contact-us">contact us</Link>
         <Link to="/about">about us</Link>
         <Link to="/privacy">privary</Link>
         <Link to="/term"> term&condition</Link>
        
          
          </Router>
        
        
        </div>
        <div className='copyright'>
       <p> © 2023 All Rights Reserved. No portion of this site may be reproduced or duplicated without the express permission .
       </p>
        </div>
       
      </div>
     
    </footer>

  );
};

export default Footer;
