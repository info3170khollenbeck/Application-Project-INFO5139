import Post from "./Post";
import { useEffect, useState } from "react";

export default function Posts({ posts }) {
  const [postList, setPostList] = useState([]);

  const getPosts = () => {
    for (let i = 0; i < 10; i++) {
      var postIndex = Math.floor(Math.random() * (posts.length - 1));

      postList.push(posts[postIndex]);
    }
  };

  getPosts();
  

  return (
    <main>
      {postList.length === 0 && "No Posts to show!"}
      {postList.map((post, index) => (
        <Post {...post} />
      ))}
      
      <button onClick={getPosts}>Load More Posts</button>
    </main>
  );
}
