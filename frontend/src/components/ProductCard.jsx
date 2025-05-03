import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Rating from './Rating'
import joyboyImage from '../uploads/image-1741550508146.png'
import unboundedImage from '../uploads/image-1741550631888.png'
import strongestImage from '../uploads/image-1741550792368.png'
import goatImage from '../uploads/image-1741550884129.png'
import strawhatImage from '../uploads/image-1741550833757.png'
import spaceImage from '../uploads/image-1741550935593.png'
import freedomImage from '../uploads/image-1741550685247.png'


// Create image mapping object
const imageMap = {
  'JOYBOY': joyboyImage,
  'UNBOUNDED': unboundedImage,
  'STRONGEST': strongestImage,
  'GOAT': goatImage,
  'STRAW HAT': strawhatImage,
  'SPACE': spaceImage,
  'FREEDOM': freedomImage,
  'FE!N': 'https://raw.githubusercontent.com/aashishops/LO--Clothing-MERN/main/frontend/src/uploads/image-1741550407598.png',  
};

const Product = ({ product }) => {
  // Get the image from the mapping, fallback to product.image if not found
  const productImage = imageMap[product.name] || product.image;
  console.log(product.name, productImage)

  return (
    <Card className='product-card my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img 
          src={productImage} 
          variant='top' 
          alt={product.name}
          onError={(e) => {
            e.target.onerror = null; // Prevent infinite loop
            e.target.src = 'https://raw.githubusercontent.com/aashishops/LO--Clothing-MERN/main/frontend/src/uploads/image-1741550407598.png'; // Fallback image
          }}
        />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div' className='product-title'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            rating={product.rating}
            numReviewText={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h4'>
          ₹{product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;