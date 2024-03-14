import { useOutletContext } from "react-router-dom";
import ImageCard from "./ImageCard";
import "./imagecard.css";

function Home() {
    const posts = useOutletContext();

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