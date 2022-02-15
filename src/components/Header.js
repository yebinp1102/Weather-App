import React from 'react'
import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
      <Location>
        <p>Dallas</p>
      </Location>
      <Temperature>
        <h1>30°C</h1>
      </Temperature>
      <Description>
        <p>Clouds</p>
      </Description>
    </Container>
  )
}

export default Header;

const Container = styled.div`
  width: 100%;
  margin: 1rem auto;
`;
const Location = styled.div`
`;
const Temperature = styled.div`
`;
const Description = styled.div`
  position: relative;
  right: -90%;
  transform-origin: 0 0;
  transform: rotate(270deg);
  letter-spacing: 2px;
`;