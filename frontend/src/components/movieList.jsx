import React from "react";

const MovieList = ({movies}) => {
    return (
        <div className="container-fluid overflow">
            <div className="row">
                {movies.map((movie, index)=>{
                    return (
                        <div className="d-flex justify-content-start m-3" key={index} style={{height: "24rem", width:"16rem"}}>
                            <img src={movie.image} alt="" style={{height: "24rem", width:"16rem", objectFit: "cover"}}/>
                        </div>
                    )
                })}
            </div>
      </div>
    )
}



export default MovieList;
