import React from "react";
import { Link } from "react-router-dom";

const MovieList = ({movies, movieListTitle}) => {
    const movieTitleStyle = {
        textShadow: "2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff"
    }
    return (
        <>
            <h1>{movieListTitle}</h1>
            <div className="container-fluid overflow">
                <div className="row">
                    {movies.map((movie, index)=>{
                        return (
                            <div className="d-flex justify-content-start m-3" key={index} style={{height: "24rem", width:"16rem", position: "relative"}}>
                                <Link to={`/${movie.slug}/`}>
                                    <div className="title" style={{position: "absolute", bottom: "1rem", left: "2rem"}}>
                                        <h2 style={movieTitleStyle}>{movie.title.toUpperCase()}</h2>
                                    </div>
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