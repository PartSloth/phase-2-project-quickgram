import { useOutletContext } from "react-router-dom";
import ImageCard from "./ImageCard";
import { useEffect, useState } from "react";

function Profile() {
    const [postsDisplayed, setPostsDisplayed] = useOutletContext();
    const profilePosts = postsDisplayed.filter(post => post.user === "lilijones21").sort((a , b) => a.id - b.id)
    const [image, setImage] = useState("");
    const [caption, setCaption] = useState("");
    const [tags, setTags] = useState("");

    //pop-up form
    useEffect(() => {
        handleCloseForm();
    }, [])

    function handleOpenForm() {
        document.getElementById("postForm").style.display = "block";
    }

    function handleCloseForm() {
        document.getElementById("postForm").style.display = "none";
    }

    //form data
    function handleFormInput(event) {
        const field = event.target.name;
        let input = event.target.value;
        if(field === "tags") {
            input = input.split(' ');
            setTags(input)
        } else if(field === "caption") {
            setCaption(input);
        } else {
            setImage(input)
        }
    }

    function handleUploadSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: "lilijones21",
                image: image,
                likes: 0,
                isLiked: false,
                caption: caption,
                tags: tags
            })
        })
        .then(res => res.json())
        .then(upload => {
            setPostsDisplayed([...postsDisplayed, upload])
            clearForm();
        })
    }

    function clearForm() {
        setImage("");
        setCaption("");
        setTags("");
    }

    return(
        <div className="profile">
            <h1>lilijones21</h1>
            <div className="profile-header">
                <div className="pic-caption">
                    <div className="column-1">
                        <img src="https://img.freepik.com/free-photo/pleasant-looking-caucasian-female-with-long-hair-wearing-yellow-casual-shirt-having-good-mood-looking-happily-camera_176532-11558.jpg?t=st=1710432128~exp=1710435728~hmac=0a436c3c73066f6c87d124b3fe1e5f44a53d38b78fae148ab5133594f2216797&w=1380" alt="Lisa Jones"/>
                        <h3>Lisa Jones</h3>
                        <p>traveler and foodie | food review youtuber | dog walker</p>
                    </div>
                    <div className="column-2">
                        <p>{profilePosts.length} posts</p>
                        <p>27 followers</p>
                        <p>187 following</p>
                    </div>
                </div>
                <div className="post-header">
                    <h2>Posts</h2>
                    <button className="open-button" onClick={handleOpenForm}>New Post</button>
                </div>
            </div>

            <div className="form-popup" id="postForm" onSubmit={handleUploadSubmit}>
                <form className="form-container">
                    <label htmlFor="image">Upload Image </label>
                    <input type="text" placeholder="Image Link" name="image" value={image} onChange={handleFormInput} required/>

                    <label htmlFor="caption">Edit Caption </label>
                    <input type="text" placeholder="Caption Description" name="caption" maxLength="300" value={caption} onChange={handleFormInput} required/>

                    <label htmlFor="tags">Tags </label>
                    <input type="text" placeholder="Separate by spaces" name="tags" maxLength="100" value={tags} onChange={handleFormInput} required/>

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