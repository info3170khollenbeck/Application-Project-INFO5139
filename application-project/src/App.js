import Posts from "./components/Posts";
import Header from "./components/Header";
import samplePosts from "./content/posts";
import {useState} from 'react';

function App() {
  const posts = samplePosts;
  const [showSignin, setShowSignin] = useState(false);

  return (
    <>
      {showSignin&& (
        "Sign In Component"
      )
      }
      <Header signin={showSignin} setShowSignin={setShowSignin}/>
      <Posts posts={posts} />
    </>
  );
}

export default App;
