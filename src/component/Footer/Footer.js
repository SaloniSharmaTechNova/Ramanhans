import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-box">
          <h2>Raman Hans Ministries</h2>
          <p>
            Spreading the Gospel of Jesus Christ and bringing hope,
            healing, and transformation to lives around the world.
          </p>
        </div>

        <div className="footer-box">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Ministry & Teaching</li>
            <li>Events</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-box">
          <h3>Ministries</h3>
          <ul>
            <li>Crusades</li>
            <li>Healing Services</li>
            <li>Television Ministry</li>
            <li>Digital Outreach</li>
            <li>Books & Publications</li>
          </ul>
        </div>
        <div className="footer-box">
          <h3>Contact Us</h3>
          <p>📍 Punjab, India</p>
          <p>📞 +91 XX</p>
          <p>✉ info@ramanhansministries.org</p>
        </div>

      </div>

      <div className="footer-social">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-youtube"></i>
        <i className="fa-brands fa-instagram"></i>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Raman Hans Ministries. All Rights Reserved.
        </p>
      </div>

    </footer>
  )
}

export default Footer
