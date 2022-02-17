import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="Originais Netflix"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Em alta" fetchUrl={requests.fetchTrending} />
      <Row title="Mais votados" fetchUrl={requests.fetchTopRated} />
      <Row title="Filmes de ação" fetchUrl={requests.fetchActionMovies} />
      <Row title="Filmes de comédia" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Filmes de terror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Filmes de romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentários" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
