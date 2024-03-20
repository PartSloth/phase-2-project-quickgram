import NavBar from './components/NavBar';
import { Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';

function App() {
  const [posts, setPosts] = useState([]);
  const [postsDisplayed, setPostsDisplayed] = useState([]);

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
      <header>
        <NavBar />
      </header>
      <Outlet context={[postsDisplayed, setPostsDisplayed]}/>
    </>
  );
}

export default App;
