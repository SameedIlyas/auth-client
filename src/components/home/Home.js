import React from 'react';
import Container from 'react-bootstrap/Container';

const Home = ({ userName }) => {
  return (
    <Container className="home-container">
      <h1>Welcome Home!</h1>
    </Container>
  );
};

export default Home;
