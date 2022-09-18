import React from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import requests from '../request'
import Row from '../Row'
import './homeScreen.css'

const Homescreen = () => {
  return (
    <div>
      <Navbar />
      <Banner />

      <Row title='Genres'   fetchUrl={requests.fetchGenres} isLargeRow />
      <Row title='TopRated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horror' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Romance' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documentary' fetchUrl={requests.fetchDocumentaries} />

    </div>
  )
}

export default Homescreen