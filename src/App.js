import React from "react";
import styled from "styled-components";


function App() {
  const apiKey = 'f24a53eac0adac173f52b6d010058a94';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=${apiKey}`

  return(
    <Container>
      Weather App
    </Container>
  )
}

export default App;

const Container = styled.div`

`;