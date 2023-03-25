import Posts from "../../components/Posts";
import samplePosts from "../../content/posts";

export default function HomePage() {
  const posts = samplePosts;
  return (
    <Posts posts={posts} />
  )
}