import React, { useEffect, useState } from 'react'
import "./banner.css";
import axios from "../../utils/axios.jsx";
import requests from "../../utils/requests.jsx";

function Banner(){
    const [movie, setMovie] = useState({});

    useEffect(() => {
        (async () => {
            try {
                const req = await axios.get(requests.fetchNetflixOriginals);
                console.log(req);
                setMovie(req.data.results[
                    Math.floor(Math.random() * req.data.results.length)
                ]);
            } catch (error) {
                console.log("error",error);
            }
        })();
    }, []);

    function truncate_text(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    }

    return (
        <div
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
                backgroundPosition: "center",
            }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">{truncate_text(movie?.overview, 150)}</h1>
            </div>
            <div className="banner__fadeBottom" />
        </div>
    )
}

export default Banner