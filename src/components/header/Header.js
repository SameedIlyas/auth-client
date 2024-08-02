import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = ({ auth, setAuth }) => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    setAuth(false);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand>
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
          AuthCheck
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="me-auto">
          {!auth && (
            <>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/register">Register</Nav.Link>
            </>
          )}
          {auth && (
            <>
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Button variant="info" onClick={handleLogout}>Logout</Button>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
