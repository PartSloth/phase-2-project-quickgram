import "./imagecard.css";
import { useState } from "react";

function ImageCard({ post }) {
    const [isLiked, setIsLiked] = useState(false);

    function handleClick(event) {
        setIsLiked(isLiked => !isLiked);
        if(isLiked) {
            post.likes = post.likes - 1;
        } else {
            post.likes = post.likes + 1;
        }
    }

    return (
        <div className="card">
            <img src={post.image} alt=""/>
            <div className="card-content">
                <h2>{post.user}</h2>
                <p>{post.caption}</p>
                <p>{post.tags.map(tag => `#${tag}`)}</p>
                <p>{post.likes} likes</p>
                <i className="icon-heart-empty" onClick={handleClick}>{isLiked ? '♥' : '♡' }</i> 
            </div>
        </div>
    )
}

export default ImageCard;