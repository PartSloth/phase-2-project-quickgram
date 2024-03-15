import { useOutletContext } from "react-router-dom";
import ImageCard from "./ImageCard";
import { useEffect } from "react";

function Profile() {
    const posts = useOutletContext();
    const profilePosts = posts.filter(post => post.user === "lilijones21")

    useEffect(() => {
        handleCloseForm();
    }, [])

    function handleOpenForm() {
        document.getElementById("postForm").style.display = "block";
    }

    function handleCloseForm() {
        document.getElementById("postForm").style.display = "none";
    }

    return(
        <div>
            <h1>lilijones21</h1>
            <img src="https://img.freepik.com/free-photo/pleasant-looking-caucasian-female-with-long-hair-wearing-yellow-casual-shirt-having-good-mood-looking-happily-camera_176532-11558.jpg?t=st=1710432128~exp=1710435728~hmac=0a436c3c73066f6c87d124b3fe1e5f44a53d38b78fae148ab5133594f2216797&w=1380" alt="Lisa Jones"/>
            <h3>Lisa Jones</h3>
            <p>traveler and foodie | food review youtuber | dog walker</p>
            <h2>Posts</h2>
            <button className="open-button" onClick={handleOpenForm}>New Post</button>

            <div className="form-popup" id="postForm">
                <form className="form-container">
                    <label for="image">Upload Image </label>
                    <input type="text" placeholder="Image Link" name="image" required/>

                    <label for="caption">Edit Caption </label>
                    <input type="text" placeholder="Caption Description" name="caption" maxlength="300" required/>

                    <button type="submit" className="btn">Upload</button>
                    <button type="button" className="btn cancel" onClick={handleCloseForm}>Cancel</button>
                </form>
            </div>
            
            <div className="card-container">
                {profilePosts.map(post => <ImageCard key={post.id} post={post}/>)}
            </div>
        </div>
    )
}

export default Profile;