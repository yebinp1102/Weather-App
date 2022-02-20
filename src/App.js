import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import axios from 'axios';


function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const apiKey = 'f24a53eac0adac173f52b6d010058a94';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

  const searchLocation = (e) => {
    if(e.key === 'Enter'){
      axios.get(url).then((response)=>{
        setData(response.data);
      })
      setLocation('');
    }
  }

  return(
    <Overlay>
      <div className="search">
        <input
          type="text"
          value={location}
          onChange={e => setLocation(e.target.value)}
          placeholder="Enter Location"
          onKeyPress={searchLocation}        
        />
      </div>
      <Container>
        {Object.keys(data).length === 0 ? (
          <div className="announce">
            <p>Welcome to weather app!</p>
            <p>Which place's weather do you wanna know?</p>
          </div>
        ): (
          <Header
            city={data.name}
            temp={data.main}
            desc={data.weather}
          />
        )}
        {data.name != undefined &&
          <Footer 
            feel={data.main}
            humi={data.main}
            wind={data.wind}
          />
        }

      </Container>
    </Overlay>
  )
}

export default App;

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,.5);

  .search{
    text-align: center;
    padding: 1rem;

    input{
      margin-top: 20px;
      padding: 10px 20px;
      border: 1px solid rgba(255, 255, 255, .8);
      background-color: rgba(255, 255, 255, .2);
      border-radius: 25px;
      font-size: 18px;
      color: #fff;
    }

    input::placeholder{
      color: #fff;
    }
  }
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

  .announce{
    text-align: center;
    letter-spacing: 1.5px;
    line-height: 60px;
  }
`;
