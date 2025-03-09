import React from 'react';
import { Row, Col, Accordion } from 'react-bootstrap';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import { Envelope, Telephone, GeoAlt, Instagram, Facebook, Twitter } from 'react-bootstrap-icons'; // Icons from react-bootstrap-icons

const ContactUs = () => {
  return (
    <>
      {/* Add a meta title for the page */}
      <Meta title="Contact Us" />

      {/* Page content */}
      <Row className="my-4">
        <Col>
          <h1>Contact Us</h1>
          <p>
            Have questions or need assistance? We're here to help! Reach out to us via email, phone, or social media, or check out our FAQ section below.
          </p>

          {/* Contact Information with Icons */}
          <div className="contact-info mb-5">
            <h3>Get in Touch</h3>
            <div className="mb-3">
              <Envelope size={24} className="me-2" />
              <strong>Email:</strong> support@lo-clothing.com
            </div>
            <div className="mb-3">
              <Telephone size={24} className="me-2" />
              <strong>Phone:</strong> +1 (123) 456-7890
            </div>
            <div className="mb-3">
              <GeoAlt size={24} className="me-2" />
              <strong>Address:</strong> 123 Streetwear Lane, Fashion City, FC 12345
            </div>
          </div>

          {/* Social Media Links */}
          <div className="social-links mb-5">
            <h3>Follow Us</h3>
            <div className="d-flex gap-3">
              <a
                href="https://instagram.com/lo_clothing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark"
              >
                <Instagram size={24} /> Instagram
              </a>
              <a
                href="https://facebook.com/lo_clothing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark"
              >
                <Facebook size={24} /> Facebook
              </a>
              <a
                href="https://twitter.com/lo_clothing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark"
              >
                <Twitter size={24} /> Twitter
              </a>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="faq-section mb-5">
            <h3>Frequently Asked Questions</h3>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>How do I track my order?</Accordion.Header>
                <Accordion.Body>
                  Once your order is shipped, you'll receive a tracking number via email. You can use this number to track your order on our website.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>What is your return policy?</Accordion.Header>
                <Accordion.Body>
                  We offer a 30-day return policy. If you're not satisfied with your purchase, you can return it for a full refund or exchange.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Do you ship internationally?</Accordion.Header>
                <Accordion.Body>
                  Yes, we ship to most countries worldwide. Shipping costs and delivery times may vary depending on your location.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>

          {/* Link to go back to the home page */}
          <Link to="/" className="btn btn-dark mt-3">
            Go Back
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default ContactUs;