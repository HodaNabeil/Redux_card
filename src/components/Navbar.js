import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link, NavLink} from 'react-router-dom'

function BasicExample() {
   const card =useSelector((state)=> state.Card)
  return (
    <Navbar  expand="lg" className="navbar-expand-lg navbar-light bg-light fixed-top">
      <Container className='py-2'>
        <NavLink  className='nav-link' to="/">Products App </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className='nav-link'  to={'/products'}>Products</NavLink>
            <Link className='nav-link'  to={'/cardProduct'}>card _{card.length}</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;