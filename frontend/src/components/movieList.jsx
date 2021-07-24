import React from "react";

const MovieList = ({movies}) => {
    return (
        <>
            {movies.map((movie, index)=>{
                console.log(movie)
                return (
                    <div className="d-flex justify-content-start m-3" key={index} style={{height: "24rem", width:"16rem"}}>
                        <img src={movie.image} alt="" style={{height: "24rem", width:"16rem", objectFit: "cover"}}/>
                    </div>
                )
            })}
        </>
    )
}



export default MovieList;
