import { Row, Col } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom'; // Import Link from react-router-dom
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import Meta from '../components/Meta';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import { useNavigate } from 'react-router-dom';
import image from '../assets/image.png'; // Import the image file
import image2 from '../assets/home_img.png'; // Import the second image file
import { Footer } from '../components/Footer'; // Import the Footer component
import { Testimonial } from '../components/Testimonial'; // Import the Testimonial component

const HomeScreen = () => {
  const navigate = useNavigate();

  // Get pageNumber and keyword from URL
  const { pageNumber, keyword } = useParams();

  // Use productsApiSlice get query to get products as per search keyword
  const { data, isLoading, error } = useGetProductsQuery({ keyword, pageNumber });

  const backHandler = () => {
    navigate(-1); // Go back to the previous screen
  };

  const productHandler = () => {
    navigate('/'); // Navigate to the home screen
    navigate('/product'); // Navigate to Prodscreen
  };

  return (
    <>
      {/* Display the banner image if no keyword is provided */}
      {!keyword && !isLoading && (
        <Row>
          <Col style={{ padding: 0 }}>
            <img
              src={image}
              alt="Welcome Banner"
              style={{ width: '100%', height: 'auto' }} // Ensure the image stretches fully
            />
          </Col>
        </Row>
      )}

      {/* Display loading spinner, error message, or content */}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          <div>{error?.data?.message || error.error}</div>
        </Message>
      ) : (
        <>
          <Meta />
          <h3 style={{ marginTop: '80px', marginBottom: '50px', fontSize: '50px', textAlign: 'center' }}>Welcome to Our Store</h3>
          <Row>
            <Col>
              {/* Flex container for text and image */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '80px' }}>
                {/* Text */}
                <p style={{ flex: 1, marginTop: '20px', fontSize: '1.2rem', textAlign: 'left' }}>
                  Welcome to Lo, your ultimate destination for bold, statement-making fashion! We specialize in graphic T-shirts and apparel that blend street culture, music, and anime into one seamless style. Whether you're a die-hard Travis Scott fan, an anime enthusiast, or just someone who loves to stand out, we’ve got something for you. From hyped artist merch to the latest urban wear, LO is all about self-expression and individuality. Our collection is constantly evolving, so you’ll always find fresh drops, exclusive designs, and top-tier quality. Elevate your wardrobe—shop LO and wear what speaks to you!as eget adipiscing quisque viverra lectus arcu, tincidunt ultrices pellentesque.
                </p>

                {/* Image */}
                <img
                  src={image2} // Use the imported image2
                  alt="Store Image"
                  style={{ width: '520px', height: 'auto' }}
                />
              </div>

              {/* Testimonials Section */}
              <div style={{ marginTop:'-90px',marginBottom: '-120px' }}> {/* Reduced margin here */}
                <Testimonial />
              </div>
            </Col>
          </Row>
        </>
      )}

      {/* Add the Footer component */}
      <Footer />
    </>
  );
};

export default HomeScreen;