import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

import MovieList from "../components/movieList";


const Home = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8000/api/movies`)
        .then(resp => setMovies(resp.data))
        window.scroll(0,0)
    }, [])
    return (
        <div>
            <MovieList movies={movies} movieListTitle={"All movies"}/>
        </div>
    )
}

export default Home
