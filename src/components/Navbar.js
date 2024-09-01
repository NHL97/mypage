import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="py-3 fs-4 fixed-top">
      <Navbar.Brand href="/">
        <img src="/logo.png" width="65" height="65" alt="Logo"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto align-items-center">
          <Nav.Link href="/" className="text-white" aria-label="Home">Home</Nav.Link>
          <Nav.Link href="/service" className="text-white" aria-label="Services">Services</Nav.Link>
          <Nav.Link href="/about" className="text-white" aria-label="About">About</Nav.Link>
          <Nav.Link href="/contact" className="text-white" aria-label="Contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
