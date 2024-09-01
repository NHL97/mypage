import React from 'react';
import './Service.css'; // Import the CSS file
import { Container, Row, Col, Button } from 'react-bootstrap';

function Service() {
  return (
    <div className="outer-container">
      <Container className="hero-container">
        <Row className="hero-section">
          <Col md={12}>
            <h1 className="title">Our Services</h1>
            <p className="subtitle">We provide top-notch solutions to help your business thrive in the digital world.</p>
          </Col>
        </Row>
      </Container>

      
        
          <Row className="main-content">
            <Col md={6}>
              <section className="services">
                <h2 className="section-title">What We Offer</h2>
                <div className="service-cards">
                  <div className="service-card">
                    <h3>Web Development</h3>
                    <p>Building responsive and high-performance websites.</p>
                  </div>
                  <div className="service-card">
                    <h3>Mobile App Development</h3>
                    <p>Creating user-friendly mobile applications for all platforms.</p>
                  </div>
                  <div className="service-card">
                    <h3>UX/UI Design</h3>
                    <p>Designing intuitive and engaging user interfaces.</p>
                  </div>
                  <div className="service-card">
                    <h3>SEO Optimization</h3>
                    <p>Improving your website's visibility on search engines.</p>
                  </div>
                  <div className="service-card">
                    <h3>Cloud Services</h3>
                    <p>Providing scalable and secure cloud solutions.</p>
                  </div>
                </div>
              </section>
            </Col>
            <Col md={6}>
              <section className="testimonials">
                <h2 className="section-title">Testimonials</h2>
                <div className="testimonial-cards">
                  <div className="testimonial-card">
                    <p>"The team provided excellent service and delivered a top-notch product!" - Client A</p>
                  </div>
                  <div className="testimonial-card">
                    <p>"Highly recommend their services for any digital needs." - Client B</p>
                  </div>
                </div>
                <section className="cta">
                  <Button className="learn-more-button" aria-label="Learn More">Learn More</Button>
                </section>
              </section>
            </Col>
          </Row>
        

        
            
      
    </div>
  );
}

export default Service;
