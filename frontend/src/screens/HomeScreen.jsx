import { Row, Col } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom'; // Import Link from react-router-dom
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import Meta from '../components/Meta';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import { useNavigate } from 'react-router-dom';
import image from '../assets/image.png'; // Import the image file

const HomeScreen = () => {
  const navigate = useNavigate();
  
  // Get pageNumber and keyword from URL
  const { pageNumber, keyword } = useParams();

  // Use productsApiSlice get query to get products as per search keyword
  const { data, isLoading, error } = useGetProductsQuery({ keyword, pageNumber });

  const backHandler = () => {
    navigate(-1); // Go back to previous screen
  };

  const productHandler = () => {
    navigate('/product'); // Navigate to Prodscreen
  };

  return (
    <>  
      {!keyword && !isLoading ? (
        <Row>
          <Row>
            <Col style={{ padding: 0 }}> {/* Remove padding to ensure the image stretches fully */}
              {/* Display the fixed image */}
              <img 
                src={image} 
                alt="Welcome Banner" 
                style={{ width: '100%', height: 'auto' }} // Stretch the image from left to right
              />
            </Col>
          </Row>
          
          {/* Display empty rows for spacing down */}
          <Row> <p></p> </Row>
          <Row> <p></p> </Row>
          <Row> <p></p> </Row>
          <Row> <p></p> </Row>
        </Row>
      ) : (
        <Row>  
          <Row>
            
          </Row>
          
          {/* Display empty rows for spacing down */}
          <Row> <p></p> </Row>
          <Row> <p></p> </Row>
          <Row> <p></p> </Row>
          <Row> <p></p> </Row>
        </Row>
      )}

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          <div>{error?.data?.message || error.error}</div> 
        </Message>
      ) : (
        <>
          <Meta />
          <h3>Welcome to Our Store</h3>
          <Row>
            <Col>
              <p>
                Welcome to LO, your ultimate destination for bold, statement-making fashion! We specialize in graphic T-shirts and apparel that blend street culture, music, and anime into one seamless style. Whether you're a die-hard Travis Scott fan, an anime enthusiast, or just someone who loves to stand out, we’ve got something for you. From hyped artist merch to the latest urban wear, LO is all about self-expression and individuality. Our collection is constantly evolving, so you’ll always find fresh drops, exclusive designs, and top-tier quality. 
              </p>
              <p>
                Elevate your wardrobe—shop Lo and wear what speaks to you!
              </p>
              {/* Add a Link to navigate to Prodscreen */}
              <Link to="/product" style={{ color: 'yellow', textDecoration: 'none' }}>
                Products
              </Link>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default HomeScreen;