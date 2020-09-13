import React, { useEffect, useState } from 'react';
import axios from '../axiosLib';
import './Row.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_image_url = "https://image.tmdb.org/t/p/w500"
const opts = {
    height: '390',
    width: '100%',
    playerVars: {
        autoplay: 1,
    },
};
function Row({ title, URL, isFullPoster }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(URL);
            setMovies(request.data.results)
        }

        fetchData();

    }, [URL])


    function handleClick(movie) {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer((movie?.name || movie?.title || movie?.original_name) || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(url);
                    setTrailerUrl(urlParams.get("https://www.youtube.com/watch?v"));
                })
                .catch(error => console.log(error))
        }
    }

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map((movie) => {
                    return (
                        <img
                            onClick={() => handleClick(movie)}
                            key={movie.id}
                            className={`row__poster ${isFullPoster && 'row__largePoster'}`}
                            src={`${base_image_url}${isFullPoster ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                    )
                })}
            </div>

            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row;