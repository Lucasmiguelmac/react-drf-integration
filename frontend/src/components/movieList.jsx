import React from "react";
import { Link } from "react-router-dom";

const MovieList = ({movies, movieListTitle}) => {
    return (
        <>
            <h1>{movieListTitle}</h1>
            <div className="container-fluid overflow">
                <div className="row">
                    {movies.map((movie, index)=>{
                        return (
                            <div className="d-flex justify-content-start m-3" key={index} style={{height: "24rem", width:"16rem"}}>
                                <Link to={`/${movie.slug}/`}>
                                    <img src={movie.image} alt="" style={{height: "24rem", width:"16rem", objectFit: "cover"}}/>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default MovieList;