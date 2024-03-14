import { useOutletContext } from "react-router-dom";
import ImageCard from "./ImageCard";

function Profile() {
    const posts = useOutletContext();
    const profilePosts = posts.filter(post => post.user === "lilijones21")

    return(
        <div>
            <h1>lilijones21</h1>
            <img src="https://img.freepik.com/free-photo/pleasant-looking-caucasian-female-with-long-hair-wearing-yellow-casual-shirt-having-good-mood-looking-happily-camera_176532-11558.jpg?t=st=1710432128~exp=1710435728~hmac=0a436c3c73066f6c87d124b3fe1e5f44a53d38b78fae148ab5133594f2216797&w=1380" alt="Lisa Jones"/>
            <h3>Lisa Jones</h3>
            <p>traveler and foodie | food review youtuber | dog walker</p>
            <h2>Posts</h2>
            <div className="card-container">
                {profilePosts.map(post => <ImageCard key={post.id} post={post}/>)}
            </div>
        </div>
    )
}

export default Profile;