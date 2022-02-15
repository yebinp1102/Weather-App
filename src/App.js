import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import axios from 'axios';


function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const apiKey = 'f24a53eac0adac173f52b6d010058a94';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`



  return(
    <Overlay>
      <Container>
        <Header />
        <Footer />
      </Container>
    </Overlay>
  )
}

export default App;

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,.5);
`;
const Container = styled.div`
  max-width: 700px;
  height: 700px;
  margin: auto;
  padding: 20px;
  position: relative;
  top: 15%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
