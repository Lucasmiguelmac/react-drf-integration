import React from "react";

const MovieList = ({movies}) => {
    return (
        <>
            {movies.map((movie, index)=>{
                console.log(movie)
                return (
                    <div key={index}>
                        <img src={movie.image} alt="" />
                    </div>
                )
            })}
        </>
    )
}



export default MovieList;
