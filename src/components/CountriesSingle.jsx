import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Image, Button, Spinner } from 'react-bootstrap';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const CountriesSingle = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const country = location.state.country;

  const [weather, setWeather] = useState("");
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(true);

  const countryTest = {
    capital:"Helsinki"
  }

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${process.env.REACT_APP_OPENWEATHER_KEY}&units=metric`)
    .then(res => setWeather(res.data)).then(setLoading(false));
  }, [countryTest.capital])

  console.log(weather);

  if(loading)
  {
    return(
      <Col className='text-center m-5'>
        <Spinner
        animation="border"
        role="status"
        className='center'
        variant='info'
        ></Spinner>
      </Col>
    )
  }

  return (
    <Container>
        <Row>
          <Col>
          <Image thumbnail src = {`https://source.unsplash.com/featured/1600x900?${country.capital}`}/>
          </Col>
          <Col>
          {!err && weather && (<div>
            <p>
              Right now it is <strong> {parseInt(weather.main.temp)} </strong> degrees in {country.capital}
            </p>
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="ygcfsduafvsd"/>
          </div>)}
          </Col>
        </Row>
        <Row>
          <Col>
          <Button variant="dark" onClick={() => navigate(`/countries`)}>Back to countries</Button>
          </Col>
        </Row>
    </Container>
  );
};

export default CountriesSingle;
