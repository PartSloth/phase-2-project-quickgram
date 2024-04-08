import NavBar from './components/NavBar';
import { Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [postsDisplayed, setPostsDisplayed] = useState([]);

  console.log(postsDisplayed)

  useEffect(() => {
    fetch("http://localhost:3000/posts")
    .then(res => res.json())
    .then(posts => {
        setPosts(posts);
        initialDisplayedCards([...posts])
    })
  }, []);

  function initialDisplayedCards(posts) {
    const updatePostsDisplayed = posts.sort(() => 0.5 - Math.random());
    setPostsDisplayed(updatePostsDisplayed)
  }
    
  return (
    <>
      <div className="header">
        <h1>QuickGram</h1>
        <img className="hide-bg" src="https://t4.ftcdn.net/jpg/04/96/47/13/360_F_496471319_DbtjoUvKqyy2e9OfgBnK5mm2AXhKpa9m.jpg"/>
      </div>
      <header>
        <NavBar />
      </header>
      <Outlet context={[postsDisplayed, setPostsDisplayed]}/>
    </>
  );
}

export default App;
