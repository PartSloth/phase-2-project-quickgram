import { useEffect, useState } from "react";
import ImageCard from "./ImageCard";
import "./imagecard.css";

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/posts")
        .then(res => res.json())
        .then(posts => setPosts(posts))
    }, []);

    return(
        <div>
            <h1>Home</h1>
            <div className="card-container">
                {posts.map(post => <ImageCard key={post.id} post={post}/>)}
            </div>
        </div>
    )
}

export default Home;