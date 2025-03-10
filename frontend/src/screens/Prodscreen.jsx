import { Row, Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Product from '../components/ProductCard';
import Paginate from '../components/Paginate';
//import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import { useNavigate } from 'react-router-dom';

const Prodscreen = () => {
  const navigate = useNavigate();

  // Get pageNumber and keyword from URL
  const { pageNumber, keyword } = useParams();

  // Use productsApiSlice get query to get products as per search keyword
  const { data, isLoading, error } = useGetProductsQuery({ keyword, pageNumber });

  const backHandler = () => {
    navigate(-1); // Go back to previous screen
  };

  const productHandler = () => {
    navigate('/'); // Navigate to home screen
  };

  // If searching, then heading is 'products found', otherwise 'Latest Products'
  const productsFound = !isLoading && data.products ? data.products.length : 0;
  const heading = keyword ? `${productsFound} Products found` : '  ';

  return (
    <>
      {!keyword && !isLoading ? null : (
        <Row>
          <Col>
            <Button className='btn-md mx-2' variant='dark' onClick={backHandler}>
              Go Back
            </Button>
            <Button className='btn-md mx-2' variant='dark' title='back to previous screen' onClick={productHandler}>
              Go To Products
            </Button>
          </Col>
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
          <h3>{heading}</h3>
          <Row>
            {data.products.map((p) => (
              <Col key={p._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={p} />
              </Col>
            ))}
          </Row>
          <Paginate pages={data.pages} page={data.page} keyword={keyword ? keyword : ''} />
        </>
      )}
    </>
  );
};

export default Prodscreen;