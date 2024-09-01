import React from 'react';
import './About.css'; // Import the CSS file
import { Container, Row, Col, Image } from 'react-bootstrap';

function About() {
  return (
    <div className="about-page">
      <Container>
        <Row className="about-section">
          <Col md={6}>
            <h2 className="about-title">About Us</h2>
            <p className="about-description">
              We are a dedicated team of professionals passionate about delivering exceptional digital solutions. Our mission is to help businesses thrive in the digital age by providing innovative and customized services.
            </p>
            <p className="about-description">
              With years of experience in the industry, we pride ourselves on our ability to understand our clients' needs and exceed their expectations. From web development to digital marketing, we are here to support your growth and success.
            </p>
          </Col>
          <Col md={6}>
            <Image 
              src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg" 
              rounded 
              fluid 
              alt="Team working together"
              className="about-image"
            />
          </Col>
        </Row>
        <Row className="team-section">
          <h2 className="team-title">Meet Our Team</h2>
          <Col md={4} className="team-member">
            <Image 
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" 
              roundedCircle 
              fluid 
              alt="Team member 1"
              className="team-member-image"
            />
            <h3 className="team-member-name">John Doe</h3>
            <p className="team-member-role">CEO & Founder</p>
          </Col>
          <Col md={4} className="team-member">
            <Image 
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" 
              roundedCircle 
              fluid 
              alt="Team member 2"
              className="team-member-image"
            />
            <h3 className="team-member-name">Jane Smith</h3>
            <p className="team-member-role">Lead Developer</p>
          </Col>
          <Col md={4} className="team-member">
            <Image 
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg" 
              roundedCircle 
              fluid 
              alt="Team member 3"
              className="team-member-image"
            />
            <h3 className="team-member-name">Emily Johnson</h3>
            <p className="team-member-role">Marketing Head</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
