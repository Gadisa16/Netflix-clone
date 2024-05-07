import React from 'react';
import Row from '../row/Row.jsx';
import requests from '../../../utils/requests'

function RowList() {
  return (
    <>
        <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
        <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
        <Row title="TV Shows" fetchUrl={requests.fetchTvShow}/>
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </>
  )
}

export default RowList