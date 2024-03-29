import { useOutletContext } from "react-router-dom";
import "./imagecard.css";
import { useState } from "react";

function ImageCard({ post }) {
    const [postsDisplayed, setPostsDisplayed] = useOutletContext();
    const [isLiked, setIsLiked] = useState(post.isLiked);

    //Like button
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
                post.isLiked = updatedPost.isLiked;
            }
            setPostsDisplayed(updatedPostsArr);
        })
    }

    //Trash button
    function handleTrashButton(event) {
        fetch(`http://localhost:3000/posts/${post.id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(deletedPost => {
            const updatedPostsArr = postsDisplayed.filter(post => post.id !== deletedPost.id);
            setPostsDisplayed(updatedPostsArr);
        })
    }

    return (
        <div className="card">
            <img src={post.image} alt=""/>
            <div className="card-content">
                <h2>{post.user}</h2>
                {post.user === "lilijones21" ?
                    <button type="button" className="btn btn-default btn-sm" onClick={handleTrashButton}>
                        <span className="glyphicon glyphicon-trash"></span> Trash 
                    </button>
                    : null
                }
                <p>{post.caption} {post.tags.map(tag => `#${tag}`)}</p>
                <p>{post.likes} likes</p>
                <i className="icon-heart-empty" onClick={handleClick}>{isLiked ? '♥' : '♡' }</i> 
            </div>
        </div>
    )
}

export default ImageCard;