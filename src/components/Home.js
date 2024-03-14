import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import ImageCard from "./ImageCard";
import "./imagecard.css";

function Home() {
    const posts = useOutletContext();
    const [postsDisplayed, setPostsDisplayed] = useState([])
    const shuffle = posts.sort(() => 0.5 - Math.random()).slice(0,20)

    useEffect(() => {
        setPostsDisplayed(shuffle)
    }, [posts])

    function handleRefresh(event) {
        setPostsDisplayed(shuffle);
    }

    return(
        <div>
            <h1>Home</h1>
            <div className="card-container">
                {postsDisplayed.map(post => <ImageCard key={post.id} post={post}/>)}
            </div>
            <p onClick={handleRefresh}>Refresh</p>
        </div>
    )
}

export default Home;