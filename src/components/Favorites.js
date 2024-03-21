import React from "react";
import { useOutletContext } from "react-router-dom";
import ImageCard from "./ImageCard";

function Favorites() {
    const [postsDisplayed] = useOutletContext();

    return(
        <>
        <h1>Favorites</h1>
            <div className="card-container">
                {postsDisplayed.map(post => {
                if(post.isLiked === true) {
                        return <ImageCard key={post.id} post={post} />
                }
                return null;
                })}
            </div>
        </>
    )
}

export default Favorites;