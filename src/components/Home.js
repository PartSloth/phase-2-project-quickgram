import { useOutletContext } from "react-router-dom";
import ImageCard from "./ImageCard";
import "./imagecard.css";

function Home() {
    const [postsDisplayed, setPostsDisplayed, shuffle] = useOutletContext();
    console.log(postsDisplayed)

    function handleRefresh(event) {
        setPostsDisplayed(shuffle);
    }

    return(
        <div>
            <h1>Home</h1>
            <div className="card-container">
                {postsDisplayed.map(post => <ImageCard key={post.id} post={post} />)}
            </div>
            <p onClick={handleRefresh}>Refresh</p>
        </div>
    )
}

export default Home;