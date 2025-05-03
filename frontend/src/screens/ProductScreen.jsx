import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { Form, Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from "../components/Rating"
import Loader from '../components/Loader'
import Message from '../components/Message'
import Meta from '../components/Meta'
import { useGetProductByIdQuery, useCreateReviewMutation } from '../slices/productsApiSlice'
import { addToCart } from '../slices/cartSlice'

// Import all product images
import joyboyImage from '../uploads/image-1741550508146.png'
import unboundedImage from '../uploads/image-1741550631888.png'
import strongestImage from '../uploads/image-1741550792368.png'
import goatImage from '../uploads/image-1741550884129.png'
import strawhatImage from '../uploads/image-1741550833757.png'
import spaceImage from '../uploads/image-1741550935593.png'
import freedomImage from '../uploads/image-1741550685247.png'

// Create image mapping object
const imageMap = {
  'FE!N': feinImage,
  'JOYBOY': joyboyImage,
  'UNBOUNDED': unboundedImage,
  'STRONGEST': strongestImage,
  'GOAT': goatImage,
  'STRAW HAT': strawhatImage,
  'SPACE': spaceImage,
  'FREEDOM': freedomImage,
  'FE!N': 'https://raw.githubusercontent.com/aashishops/LO--Clothing-MERN/main/frontend/src/uploads/image-1741550407598.png',  
};

const ProductScreen = () => {
  const { id: productId } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [qty, setQty] = useState(1)
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')
  const { userInfo } = useSelector((state) => state.auth)
  
  const { data: product, isLoading, refetch, error } = useGetProductByIdQuery(productId)
  const [createReview, { isLoading: loadingProductReview }] = useCreateReviewMutation()

  // Get the mapped image or fallback to product.image
  const getProductImage = () => {
    return imageMap[product.name] || product.image
  }

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }))
    navigate('/cart')
  }

  const backHandler = () => {
    navigate(-1)
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      await createReview({
        productId, 
        rating, 
        comment 
      }).unwrap()
      refetch()
      toast.success('Review Submitted')
      setRating(0)
      setComment('')
    } catch (err) {
      toast.error(err?.data?.message || err.error)
    }
  }

  return (
    <>
      { isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          <div>{error?.data?.message || error.error}</div> 
        </Message>
      ) : ( 
        <>
          <Meta title={product.name} />
          <Link className='btn btn-dark my-3' onClick={backHandler}>
            Back
          </Link>
          
          <Row className='product-details'>
            <Col md={5}>
              <Image 
                src={getProductImage()} 
                alt={product.name} 
                fluid 
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src = '/images/placeholder.png'
                }}
              />
            </Col>  
            
            <Col md={4}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h2 style={{ color: '#f0e130', fontWeight: 'bold' }}>
                    {product.name}
                  </h2>
                </ListGroup.Item> 
                
                <ListGroup.Item>
                  <Rating 
                    rating={product.rating} 
                    numReviewText={`${product.numReviews} reviews`} 
                  /> 
                </ListGroup.Item> 
                
                <ListGroup.Item>Price: ₹{product.price}</ListGroup.Item>   
                <ListGroup.Item>Description: {product.description}</ListGroup.Item>   
              </ListGroup>
            </Col> 
            
            <Col md={3}>
              <Card>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col><strong>₹{product.price}</strong></Col>
                    </Row>
                  </ListGroup.Item> 
                  
                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        <strong>
                          {product.countInStock > 0 ? `In Stock: ${product.countInStock}` : 'Out of Stock'}
                        </strong>
                      </Col>
                    </Row>
                  </ListGroup.Item> 
                  
                  {product.countInStock > 0 && (
                    <ListGroup.Item> 
                      <Row>
                        <Col>Qty</Col>
                        <Col>
                          <Form.Control 
                            as='select'
                            value={qty}
                            onChange={(e) => setQty(Number(e.target.value))}
                          >
                            {[...Array(product.countInStock).keys()].map((x) => (
                              <option key={x+1} value={x+1}>
                                {x+1}
                              </option>
                            ))}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>  
                  )}
                  
                  <ListGroup.Item>
                    <Button 
                      className='btn-block' 
                      type='button'
                      disabled={product.countInStock === 0}
                      onClick={addToCartHandler}
                    >
                      Add to Cart
                    </Button>
                  </ListGroup.Item> 
                </ListGroup>    
              </Card>
            </Col> 
          </Row>
          
          <Row className='product-details reviews'>
            <Col md={6}>
              <br />
              <br />
              <h3>Reviews</h3>
              {product.reviews.length === 0 && <Message>No Reviews</Message>}
              
              <ListGroup variant='flush'>
                {product.reviews.map(review => (
                  <ListGroup.Item key={review._id}>
                    <strong>{review.name}</strong>  
                    <Rating rating={review.rating} numReviewText={' '} />
                    <p>{review.createdAt.substring(0, 10)}</p>
                    <p>{review.comment}</p>
                  </ListGroup.Item>   
                ))}

                <ListGroup.Item>
                  <h3>Write a Review</h3>
                  {loadingProductReview && <Loader />}

                  {userInfo ? (
                    <Form onSubmit={submitHandler}>
                      <Form.Group controlId='rating' className='my-2'>
                        <Form.Label>Rating</Form.Label> 
                        <Form.Control 
                          as='select' 
                          value={rating}
                          onChange={(e) => setRating(Number(e.target.value))}
                        >
                          <option value=''>Select...</option>
                          <option value='1'>1 - Poor</option>
                          <option value='2'>2 - Fair</option>
                          <option value='3'>3 - Good</option>
                          <option value='4'>4 - Very Good</option>
                          <option value='5'>5 - Excellent</option>
                        </Form.Control>    
                      </Form.Group>
                      
                      <Form.Group controlId='comment' className='my-2'>
                        <Form.Label>Comment</Form.Label> 
                        <Form.Control 
                          as='textarea' 
                          value={comment}
                          rows='3'
                          onChange={(e) => setComment(e.target.value)}
                        />
                      </Form.Group>
                      
                      <Button 
                        className='btn-block' 
                        disabled={loadingProductReview}
                        type='submit'
                        variant='primary'
                      >
                        Submit
                      </Button>
                    </Form>   
                  ) : (
                    <Message>
                      Please <Link to='/login'>sign in</Link> to write a Review
                    </Message>    
                  )}
                </ListGroup.Item>  
              </ListGroup>    
            </Col>
          </Row>
        </>
      )}
    </> 
  )
}

export default ProductScreen