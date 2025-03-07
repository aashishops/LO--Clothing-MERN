import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <>
      {/* Add a meta title for the page */}
      <Meta title="About Us" />

      {/* Page content */}
      <Row className="my-4">
        <Col>
          <h1>About Us</h1>
          <p>
            At LO, we’re all about pushing boundaries, breaking norms, and redefining streetwear. Born from a passion for bold designs and self-expression, our brand is built for those who aren’t afraid to stand out. Whether you’re drawn to high-energy graphics, anime-inspired styles, or effortlessly cool street fashion, LO is your go-to destination for apparel that speaks volumes.
          </p>
          <p>
            We believe fashion should be more than just clothing—it should be a reflection of who you are. That’s why every piece we create is designed with quality, comfort, and creativity in mind. From oversized hoodies that wrap you in effortless style to graphic tees that make a statement, our collection is constantly evolving to bring you the freshest drops and the most unique designs.
          </p>
          <p>
            But LO is more than just a brand—it’s a movement. A community of trendsetters, dreamers, and creators who embrace individuality and live life unapologetically. When you wear LO, you’re not just wearing clothes; you’re owning your style, making your mark, and turning heads wherever you go.
          </p>
          <p> 
            Join the LO family and step into a world where fashion is fearless, creativity has no limits, and your style is 100% you.
          </p>
          {/* Link to go back to the home page */}
          <Link to="/" className="btn btn-dark">
            Go Back
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default AboutUs;