import { Row, Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
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
    navigate('/');
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
                Welcome to us, your climate-destination for food, customer-making fashion!  
                We decided to replace T-shirts and expand our latest retail culture inside, and more time was desirable. Safe, vibrant plants & school films about fun, an entire enthusiast, of just someone who loves to stand out, we’ve got something for you. From typical artist needs to be better-than-taxer, I’d do all about self-propelling individually. Our ambition is constantly evolving, so you’ll always find more drugs, exclusive designs, and top-her colors, bearing your workflow—shop it out on wood what stands in yours right adjusting unique views such as mix, traditional unique picturesque.
              </p>
              <p>
                I’d never missed Every time I order, the quality is amazing, and the designs are exactly my style. The graphics are bold, the fit is perfect, and I always get asked when I put my alerts from. Definitely my favorite spot for unique streetwear!”
              </p>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default HomeScreen;