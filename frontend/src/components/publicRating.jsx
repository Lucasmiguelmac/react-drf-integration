import { useState } from "react";
import { FaStar } from "react-icons/fa";

const starColors = {
    orange: "#FFBD01",
    grey: "#a9a9a9"
}

const PublicRating = ({rating}) => {

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5>{rating.user || "Deleted User"}</h5>
                    <div className="stars">
                        {[1,2,3,4,5].map((num, index) =>{
                            return (
                                <FaStar
                                    key={index}
                                    style={{marginRight: "0.6rem", "color": rating.rating >= num ? starColors.orange : starColors.grey}}
                                />
                            )
                        })}
                    </div>
                    <p>{rating.comment}</p>
                </div>
            </div>
        </>
    )
}

export default PublicRating;