import NavBar from './components/NavBar';
import { Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      fetch("http://localhost:3000/posts")
      .then(res => res.json())
      .then(posts => setPosts(posts))
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <Outlet context={posts}/>
    </>
  );
}

export default App;
