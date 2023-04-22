import React from 'react';
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="welcomePageContainer">
      <div className="welcomePage">
        <h1>{"Countries app"}</h1> 
        <p>{"is a simple React application made in Business College Helsinki lessons."}</p>
        <section>
          <h2>{"App uses"}</h2>
          <a href="https://restcountries.com/">https://restcountries.com/ </a> and{' '}
          <a href="https://openweathermap.org/">https://openweathermap.org/</a>
        </section>
      </div>
    </div>
  );
};

export default Home;
