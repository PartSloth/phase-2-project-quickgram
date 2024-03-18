import { useOutletContext } from "react-router-dom";
import "./imagecard.css";
import { useEffect, useState } from "react";

function ImageCard({ post, postsDisplayed, setPostsDisplayed }) {
    const [posts] = useOutletContext();
    const [isLiked, setIsLiked] = useState(false);
    const isAccount = post.isAccount;

    useEffect(() => {
        setIsLiked(post.isLiked);
    }, [posts])

    function handleClick(event) {
        setIsLiked(isLiked => !isLiked);
        fetch(`http://localhost:3000/posts/${post.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                likes: isLiked ? post.likes - 1 : post.likes + 1,
                isLiked: !isLiked
            })
        })
        .then(res => res.json())
        .then(updatedPost => handleUpdatingPosts(updatedPost))
    }

    function handleUpdatingPosts(updatedPost) {
        const updatedPostsArr = [...postsDisplayed];
        updatedPostsArr.filter(post => {
            if(post.id === updatedPost.id) {
                post.likes = updatedPost.likes;
            }
            setPostsDisplayed(updatedPostsArr);
        })
    }

    return (
        <div className="card">
            <img src={post.image} alt=""/>
            <div className="card-content">
                <h2>{post.user}</h2>
                <p>{post.caption} {post.tags.map(tag => `#${tag}`)}</p>
                <p>{post.likes} likes</p>
                {isAccount? null : 
                <i className="icon-heart-empty" onClick={handleClick}>{isLiked ? '♥' : '♡' }</i> 
                }
            </div>
        </div>
    )
}

export default ImageCard;