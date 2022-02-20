import React from 'react'
import styled from 'styled-components';

const Header = ({city, temp, desc}) => {
  return (
    <Container>
      <Location>
        <p>{city}</p>
      </Location>
      <Temperature>
        {temp ? <h1>{temp.temp}°F</h1> : null}
      </Temperature>
      <Description>
        {desc ? <p>{desc[0].main}</p> : null}
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