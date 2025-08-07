import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillMail,
  AiFillPhone,
  AiFillEnvironment,
} from "react-icons/ai";
import { FaLinkedinIn, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      {/* Contact Information Section */}
      <Row className="footer-contact-section">
        <Col lg={12} className="text-center mb-4">
          <h2 className="footer-title">Let's Connect</h2>
          <p className="footer-subtitle">
            Ready to collaborate? Feel free to reach out through any of these channels
          </p>
        </Col>
      </Row>

      <Row className="footer-contact-grid">
        <Col lg={3} md={6} className="contact-item">
          <div className="contact-card">
            <div className="contact-icon">
              <AiFillMail />
            </div>
            <h4>Email</h4>
            <p>vikashvermacom92@gmail.com</p>
            <a href="mailto:vikashvermacom92@gmail.com" className="contact-link">
              Send Email
            </a>
          </div>
        </Col>

        <Col lg={3} md={6} className="contact-item">
          <div className="contact-card">
            <div className="contact-icon">
              <AiFillPhone />
            </div>
            <h4>Phone</h4>
            <p>+91 8817956935</p>
            <a href="tel:+918817956935" className="contact-link">
              Call Now
            </a>
          </div>
        </Col>

        <Col lg={3} md={6} className="contact-item">
          <div className="contact-card">
            <div className="contact-icon">
              <AiFillEnvironment />
            </div>
            <h4>Location</h4>
            <p>Bhopal, Madhya Pradesh, India</p>
            <a href="hhttps://maps.app.goo.gl/5xRc9erZrmLcCEHi6" target="_blank" rel="noopener noreferrer" className="contact-link">
              View on Map
            </a>
          </div>
        </Col>

        <Col lg={3} md={6} className="contact-item">
          <div className="contact-card">
            <div className="contact-icon">
              <FaWhatsapp />
            </div>
            <h4>WhatsApp</h4>
            <p>Available for quick chats</p>
            <a href="https://wa.me/918817956935" target="_blank" rel="noopener noreferrer" className="contact-link">
              Start Chat
            </a>
          </div>
        </Col>
      </Row>

      {/* Social Media Section */}
      <Row className="footer-social-section">
        <Col md={12} className="text-center">
          <h3 className="social-title">Follow Me</h3>
          <p className="social-subtitle">Stay updated with my latest work and insights</p>
          <ul className="social-icons-list">
            <li className="social-icon-item">
              <a
                href="https://github.com/dev-vikash2v7"
                target="_blank"
                rel="noreferrer"
                className="social-link github"
                aria-label="GitHub"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icon-item">
              <a
                href="https://www.linkedin.com/in/vikash-kverma/"
                target="_blank"
                rel="noreferrer"
                className="social-link linkedin"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icon-item">
              <a
                href="https://leetcode.com/u/vikash92/"
                target="_blank"
                rel="noreferrer"
                className="social-link leetcode"
                aria-label="LeetCode"
              >
                <SiLeetcode color="yellow" enableBackground="green" fill="yellow" />
              </a>
            </li>
            <li className="social-icon-item">
              <a
                href="https://x.com/vk23developer"
                target="_blank"
                rel="noreferrer"
                className="social-link twitter"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            </li>
            <li className="social-icon-item">
              <a
                href="https://instagram.com/vikash.kverma"
                target="_blank"
                rel="noreferrer"
                className="social-link instagram"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>

     
    </Container>
  );
}

export default Footer;
