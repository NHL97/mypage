import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';


function Footer() {
  return (
    <footer className="bg-dark py-4 ">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="text-center text-md-left mb-3 mb-md-0">
            <Link to="/">
              <img src="/logo.png" width="65" height="65" alt="Logo" className="mx-auto mx-md-0" />
            </Link>
          </Col>

          <Col md={4} className="text-center mb-3 mb-md-0">
            <Link to="/" className="text-light mx-2 text-decoration-none">Home</Link>
            <Link to="/service" className="text-light mx-2 text-decoration-none">Services</Link>
            <Link to="/about" className="text-light mx-2 text-decoration-none">About</Link>
            <Link to="/contact" className="text-light mx-2 text-decoration-none">Contact</Link>
          </Col>
          <Col md={4} className="text-center text-md-right">
            <a href="https://www.facebook.com" className="text-light mx-2"><FaFacebook size={24} /></a>
            <a href="https://www.twitter.com" className="text-light mx-2"><FaTwitter size={24} /></a>
            <a href="https://www.instagram.com" className="text-light mx-2"><FaInstagram size={24} /></a>
            <a href="https://www.linkedin.com" className="text-light mx-2"><FaLinkedin size={24} /></a>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p className="mb-0 text-white">© {new Date().getFullYear()} My Page. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
