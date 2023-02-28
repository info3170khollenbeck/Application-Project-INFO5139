
import './App.css';
import Posts from './components/Posts';
import samplePosts from './content/posts';

function App() {
  const posts = samplePosts;
  return (
    <Posts 
      posts={posts}
    />
  );
}

export default App;
