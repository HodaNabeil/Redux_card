

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import { useDispatch, useSelector } from 'react-redux';
import {Image} from 'react-bootstrap'
import { clearCard, deleteCard } from '../rtk/Slice/cardSlice';

const CardProduct = () => {
  const card = useSelector((state)=> state.Card);
  const totalPrice = card.reduce((acc,product)=> {
   acc += product.price * product.quantity 
    return acc;
  },0)
  const dispach = useDispatch()
  return (
    <Container className=' container_pro'>
      <Button variant='danger' className='mb-2' onClick={()=> {  dispach(clearCard(card))}}>  clear</Button>
      <h5> Totoal Price : {totalPrice.toFixed(2)} $</h5>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>title</th>
            <th>img</th>
            <th>price</th>
            <th>action</th>
            <th> quantity </th>
          </tr>
        </thead>
        <tbody>
          {
            card.map((product)=> {
              return(
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.title}</td>
                  <td><Image src={product.image} style={{width:'100px' ,height : '100px'}}/> </td>
            
                  <td>{product.price} $</td>
                  <td><Button variant='danger' onClick={()=> {dispach(deleteCard(product))}}> delete </Button></td>
                  <td>{product.quantity}</td>
              </tr>
              )
            })
          }
        
    
        </tbody>
      </Table>
  </Container>
  );
}

export default CardProduct;
