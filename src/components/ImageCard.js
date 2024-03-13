import "./imagecard.css";

function ImageCard({ post }) {
    return (
        <div className="card">
            <img src={post.image} alt=""/>
            <div className="card-content">
                <h2>{post.user}</h2>
                <p>{post.caption}</p>
                <p>{post.tags}</p>
                <p>{post.likes} likes</p>
            </div>
        </div>
    )
}

export default ImageCard;