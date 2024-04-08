import React from "react";
import { useOutletContext } from "react-router-dom";
import ImageCard from "./ImageCard";

function Favorites() {
    const [postsDisplayed] = useOutletContext();

    return(
        <div className="favorites">
            <h1>Your Favorites</h1>
                <div className="card-container">
                    {postsDisplayed.map(post => {
                    if(post.isLiked === true) {
                            return <ImageCard key={post.id} post={post} />
                    }
                    return null;
                    })}
                </div>
        </div>
    )
}

export default Favorites;