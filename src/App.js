import NavBar from './components/NavBar';
import { Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';

function App() {
  const [posts, setPosts] = useState([]);
  const [postsDisplayed, setPostsDisplayed] = useState([])
  const shuffle = posts.sort(() => 0.5 - Math.random()).slice(0,20)

  useEffect(() => {
      fetch("http://localhost:3000/posts")
      .then(res => res.json())
      .then(posts => {
        setPosts(posts)
      })
  }, []);

    // Initial shuffle of 20 displayed imagecards.
    useEffect(() => {
        setPostsDisplayed(shuffle)
    }, [posts])

  return (
    <>
      <header>
        <NavBar />
      </header>
      <Outlet context={[postsDisplayed, setPostsDisplayed, shuffle ]}/>
    </>
  );
}

export default App;
