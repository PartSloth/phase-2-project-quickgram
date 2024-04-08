import { useOutletContext } from "react-router-dom";
import ImageCard from "./ImageCard";
import "./imagecard.css";
import "./pages.css";

function Home() {
    const [postsDisplayed, setPostsDisplayed] = useOutletContext();

    function handleRefresh(event) {
        const updatePostsDisplayed = [...postsDisplayed]
        setPostsDisplayed(updatePostsDisplayed.sort(() => 0.5 - Math.random()))
    }

    return(
        <div className="home">
            <div className="card-container">
                {postsDisplayed.slice(0,20).map(post => <ImageCard key={post.id} post={post} />)}
            </div>
            <button onClick={handleRefresh}>Load More...</button>
        </div>
    )
}

export default Home; 