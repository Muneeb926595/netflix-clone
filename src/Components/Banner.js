import React, { useEffect, useState } from 'react';
import requests from '../request';
import axios from '../axiosLib';
import './Banner.css';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function getData() {
            const request = await axios.get(requests.fetchNetflixOriginal);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
            return request;
        }
        getData();
    }, [])

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header className="banner" style={{
            backgroundSize: 'cover',
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
            backgroundPosition: 'center center'
        }}>
            <div className="banner__content">
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>

                <div className="banner__buttons">
                    <button className="banner__button" >Play</button>
                    <button className="banner__button" >My List</button>
                </div>

                <div className="banner__description">
                    {truncate(movie?.overview, 150)}
                </div>
            </div>
            <div className="banner--fadeBottm"></div>
        </header>
    )
}

export default Banner;