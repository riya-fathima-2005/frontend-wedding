import React from "react";
import "../../assets/Style/Footer.css";
import { Link } from "react-router-dom";
    



const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="display">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Wedding Website. All rights reserved.</p>

        <div className="footer-links">
         
          <span>
                  <Link to="/about" className="footer-link">
                    About
                  </Link>
                </span>
           <span>
                  <Link to="/contact" className="footer-link">
  Contact
</Link>
                </span>

           <span>
                  <Link to="/faqqq" className="footer-link">
                    FAQ
                  </Link>
                </span>
        </div>
         </div>
       <a
  href="https://wa.me/919999999999"
  target="_blank"
  rel="noopener noreferrer"
  className="chat-btn"
  style={{textDecoration: "none"}}
>
  Let's Chat
</a>

     </div>
    </footer>
  );
};

export default Footer; 
