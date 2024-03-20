import { useOutletContext } from "react-router-dom";
import ImageCard from "./ImageCard";
import "./imagecard.css";

function Home() {
    const [postsDisplayed, setPostsDisplayed] = useOutletContext();

    function handleRefresh(event) {
        const updatePostsDisplayed = [...postsDisplayed]
        setPostsDisplayed(updatePostsDisplayed.sort(() => 0.5 - Math.random()))
    }

    return(
        <div>
            <h1>Home</h1>
            <p onClick={handleRefresh}>Refresh</p>
            <div className="card-container">
                {postsDisplayed.slice(0,20).map(post => <ImageCard key={post.id} post={post} />)}
            </div>
        </div>
    )
}

export default Home; 