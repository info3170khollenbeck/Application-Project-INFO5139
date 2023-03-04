import Posts from "./components/Posts";
import Header from "./components/Header";
import samplePosts from "./content/posts";

function App() {
  const posts = samplePosts;
  return (
    <>
      <Header />
      <Posts posts={posts} />
    </>
  );
}

export default App;
