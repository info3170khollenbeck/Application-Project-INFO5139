import Post from "./Post";
import { useEffect, useState } from 'react';

export default function Posts({ posts }) {
    const [postListTwo, setPostListTwo] = useState([])  
    useEffect(() => {
        let postList = [];

        for (let i = 0; i < 10; i++) {
            var postIndex = Math.floor(Math.random() * (posts.length - 1)); 
            postList += posts[postIndex];
            console.log(postList);
        }
        setPostListTwo(postList);
    });
        
    
    
    return (
        <main>
            {postListTwo.map((post, index) => (
                <Post
                    {...post}
                />
            ))}
        </main>
    )
}