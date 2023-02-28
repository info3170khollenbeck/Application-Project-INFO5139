import Post from "./Post";

export default function Posts({ posts }) {
    return (
        <main>
            {posts.map((post, index) => (
                <Post
                    {...post}
                />
            ))}
        </main>
    )
}