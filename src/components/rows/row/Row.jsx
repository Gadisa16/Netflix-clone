import React, { useEffect, useState, useRef } from 'react';
import "./row.css";
import axios from "../../../utils/axios";
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovie] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const Location = useRef(null);

    const base_url = "https://image.tmdb.org/t/p/original";


    useEffect(() => {
        (async () => {
            try {
                const request = await axios.get(fetchUrl);
                // console.log(request.data.results)
                setMovie(request.data.results);
            } catch (error) {
                console.log("error", error);
            }
        })()
    }, [fetchUrl]);

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');

        } else {
            movieTrailer(movie?.title || movie?.name || movie?.original_name)
                .then((url) => {
                    const url_query = new URL(url).search; // ?v=5xVh-7ywKpE =>to parse (from string to url) and get url query (part after ?)
                    const urlParams = new URLSearchParams(url_query); // enable us (provide us the methods) to get the value of the query
                    setTrailerUrl(urlParams.get('v'));
                    Location.current?.scrollIntoView({ behavior: "smooth" });
                })
        }
    }

    const opts = {
        height: '390',
        width: "100%",
        playerVars: {
            autoplay: 1, // to autoplay the video when it loads
        },
    }

return (
    <div className="row">
        <h1>{title}</h1>
        <div className="row__posters">
            {movies?.map((movie, index) => (
                <div key={index} className="row__posterContainer">
                    <img
                        onClick={() => handleClick(movie)}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    />

                    <div className="row__posterTitle">{movie?.title || movie?.name || movie?.original_name}</div>
                </div>
            ))}
        </div>
        
        <div ref = {Location} style={{ padding: '30px' }}>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    </div>
)
}

export default Row

