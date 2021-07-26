import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import "../App.css";

const MovieDetail = ({match}) => {
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:8000/api/movies/${match.params.slug}/`)
        .then(resp => setMovie(resp.data))
        window.scroll(0,0);
    }, [])
    if (movie) {
        return (
            <div style={{height: "100vh", width: "100vw"}}>
                <img src={movie.image} style={{height: "50rem", objectFit: "cover", width: "100%"}} alt=""/>
                <div className="container">
                    <div style={{display: 'flex', flexDirection: "column"}}>
                        <div className="info" style={{marginTop: "5rem"}}>
                            <h1>{movie.title}</h1>
                            <h6>Release date: {movie.release_date}</h6>
                            <h6>Genre: {movie.genre}</h6>
                            <p>Plot: {movie.plot}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <h1>MOVIE NOT FOUND</h1>
        )
    }
    }

export default MovieDetail
