import React from 'react'
import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
      <Feels>
        <p className='bold'>30°C</p>
        <p>Feels Like</p>
      </Feels>
      <Humidity>
        <p className='bold'>20%</p>
        <p>Humidity</p>
      </Humidity>
      <WIND>
        <p className='bold'>12 MPH</p>
        <p>Wind Speed</p>
      </WIND>
    </Container>
  ) 
}

export default Footer;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  background-color: rgba(255,255,255,.2);
  padding: 20px;
  border-radius: 20px;
  text-align: center;
  font-weight: 100;

  .bold{
    font-weight: 600;
  }
`;
const Feels = styled.div``;
const Humidity = styled.div``;
const WIND = styled.div``;