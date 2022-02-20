import React from 'react'
import styled from 'styled-components';

const Footer = ({feel, humi, wind}) => {
  return (
    <Container>
      <Feels>
        {feel ? <p className='bold'>{feel.feels_like} °F</p> : null}
        <p>Feels Like</p>
      </Feels>
      <Humidity>
        {humi ? <p className='bold'>{humi.humidity} %</p> : null}
        <p>Humidity</p>
      </Humidity>
      <WIND>
        {wind ? <p className='bold'>{wind.speed} MPH</p> : null}
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