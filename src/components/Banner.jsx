import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from '../axios'
import requests from '../request';
import './banner.css'

const Banner = () => {

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random()* request.data.results.length - 1)
        ]
      );
      return requests;
    }
  fetchData();
  }, []);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n-1) + '...' : string;
  }

  return (
    <header className='banner'
    style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: 'center center',
        backgroundColor: 'black'
    }}
    >
        <div className="banner_contents">
            <h1 className="banner_title">
              {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="banner buttons">
                <button className='banner_button'>시청하기</button>
                <button className='banner_button'>내 재생목록</button>
                <h1 className='banner_description'>
                  {truncate(movie?.overview, 150)}
                </h1>
            </div>
        </div>

        <div className="banner--fadeBottom" />
    </header>
  )
}

export default Banner