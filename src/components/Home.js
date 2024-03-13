import { useEffect, useState } from "react";

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
        {posts.map(post => <img src={post.image} />)}
        </div>
    )
}

export default Home;