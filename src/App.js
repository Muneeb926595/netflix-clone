import React from 'react';
import Banner from './Components/Banner';
import Row from './Components/Row';
import requests from './request';
import './App.css'
import Navbar from './Components/Navbar';

function App() {

  return (
    <div className="fullbody">
      <Navbar />
      <Banner />
      <Row title="NETFLIX ORIGINAL" URL={requests.fetchNetflixOriginal} isFullPoster />
      <Row title="Trending Now" URL={requests.fetchTrending} />
      <Row title="Top Rated" URL={requests.fetchTopRated} />
      <Row title="Action Movies" URL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" URL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" URL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" URL={requests.fetchRomanceMovies} />
      <Row title="Documentaries" URL={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
