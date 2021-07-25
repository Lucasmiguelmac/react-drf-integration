import React, { useState } from 'react';
import MovieList from './components/movieList';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";

function App() {
  const [movies, setMovies] = useState([
    {
      "ratings":[
        {
            "id":1,
            "user":"c95326dd626b4e5a9528ceb804d8a9",
            "rating":4,
            "comment":"best movie ever"
        }
      ],
      "title":"Spiderman",
      "release_date":"2021-07-24",
      "genre":"Action",
      "plot":"asdsadsad",
      "image":"https://cronicaglobal.elespanol.com/uploads/s1/61/11/51/3/main-700b9bff30_11_1000x528.jpeg"
    },
    {
      "ratings": [
        {}
      ],
      "title": "Mí título",
      "release_date": "2020-02-02",
      "genre": "Action",
      "plot": "fdsfdsfds",
      "image": "https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-no-image-available-icon-flat.jpg"
    },
    {
      "ratings": [],
      "title": "Mí título",
      "release_date": "2020-02-02",
      "genre": "Action",
      "plot": "fdsfdsfds",
      "image": "https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-no-image-available-icon-flat.jpg"
    }
  ]);
  return (
    <div className="container-fluid overflow">
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  )
}

export default App;