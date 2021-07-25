import React, { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import MovieList from './components/movieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

import "./App.css";
import NavBar from './components/navBar';

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8000/api/movies`)
    .then(resp => setMovies(resp.data))
  }, [])
  return (
    <BrowserRouter>
      <NavBar />
      <MovieList movies={movies} />
    </BrowserRouter>
  )
}

export default App;