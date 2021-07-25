import React, { useState, useEffect } from 'react';
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
    <>
      <NavBar />
      <div className="container-fluid overflow">
        <div className="row">
          <MovieList movies={movies} />
        </div>
      </div>
    </>
  )
}

export default App;