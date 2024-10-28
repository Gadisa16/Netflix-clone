import React, { useEffect, useState, useRef } from 'react';
import "./banner.css";
import axios from "../../utils/axios";
import requests from "../../utils/requests.jsx";
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

function Banner() {
    const [movie, setMovie] = useState({});
    const [trailerID, setTrailerID] = useState("");
    const videoRef = useRef(null); // Step 1: Create a ref for the video section
    const [noTrailerMessage, setNoTrailerMessage] = useState("");

    useEffect(() => {
        (async () => {
            try {
                const req = await axios.get(requests.fetchNetflixOriginals);
                setMovie(req.data.results[
                    Math.floor(Math.random() * req.data.results.length)
                ]);
            } catch (error) {
                console.log("error", error);
            }
        })();
    }, []);

    const playTrailer = (movie) => {
        if (trailerID) {
            setTrailerID("");
        } else {
            movieTrailer(movie?.original_name || movie?.title || movie?.name)
                .then((url) => {
                    if (!url) {
                        showNoTrailerMessage();
                        return;
                    }
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerID(urlParams.get('v'));
                    // Step 3: Scroll to video section
                    videoRef.current?.scrollIntoView({ behavior: "smooth" });
                    
                })
                .catch((error) => {
                    console.log("Error finding trailer:", error)
                    showNoTrailerMessage();
                    });
        }
    };

    const showNoTrailerMessage = () => {
        setNoTrailerMessage("There is no Trailer for this movie, refresh and try for other movies!");
        setTimeout(() => setNoTrailerMessage(""), 3000); // Clear message after 3 seconds
    };

    function truncate_text(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    }

    const opts = {
        height: '390',
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <>
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
                        <button className="banner__button" onClick={() => playTrailer(movie)}>Play</button>
                        <button className="banner__button">My List</button>
                    </div>
                    <h1 className="banner__description">{truncate_text(movie?.overview, 150)}</h1>
                </div>
                <div className="banner__fadeBottom" />
            </div>

            {/* Step 2: Attach the ref to the div that wraps the YouTube component */}
            <div ref={videoRef}>
                {trailerID && <YouTube videoId={trailerID} opts={opts} />}
            </div>
            
            <div>
                {noTrailerMessage &&
                <div className="no-trailer-message">
                    {noTrailerMessage}
                </div>}
            </div>
        </>
    );
}

export default Banner;
