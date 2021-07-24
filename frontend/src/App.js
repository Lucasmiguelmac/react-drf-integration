import React, { useState } from 'react';


function App() {
  const [movies, setMovies] = useState([
    {
      "ratings": [],
      "title": "Mí título",
      "release_date": "2020-02-02",
      "genre": "Action",
      "plot": "fdsfdsfds"
    }
  ]);
  return (
    <div>
      Hola
    </div>
  )
}

export default App
