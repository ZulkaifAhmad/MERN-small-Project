import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function App() {
  let navigate = useNavigate();

  let [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get("http://localhost:3000/posts");
      setPosts(res.data.posts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="app-container">
      <h1>Welcome to the Social Posts !</h1>

      <button onClick={() => navigate("/create-post")}>
        Create Post
      </button>

      <button onClick={fetchPosts}>
        Refresh Posts
      </button>

      {posts.map((post) => (
        <div className="post-card" key={post._id}>
          <p>{post.caption}</p>
          <img src={post.image} alt="image" />
        </div>
      ))}
    </div>
  );
}

export default App;

