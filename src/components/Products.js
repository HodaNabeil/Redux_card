import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProdcuts} from '../rtk/Slice/ProductsSlice'; 
import { addCard } from '../rtk/Slice/cardSlice';

const Products = () => {
  const products = useSelector( (state)=>   state.allProducts);

  const dispatch = useDispatch()
  useEffect(()=> {
  dispatch(fetchProdcuts());
  },[])
  return (
  <>
    <Container className='container_pro' >
      <Row>
        {
          products.map((product)=> {
            return (
              <Col key={product.id}>
              <Card style={{ width: '18rem'}}>
                  <Card.Img variant="center" style={{ width: '100px',height:'100px'}}  src= {product.image} alt={product.description} />
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text >
                        {product.price} $
                      </Card.Text>
                      <Button variant="primary" onClick={ ()=> { dispatch(addCard(product))}} > add Product</Button>
                    </Card.Body>
                </Card>
            </Col>
            )
          })
        }
  


      </Row>
    </Container>
  

  </>
  );
}

export default Products;
