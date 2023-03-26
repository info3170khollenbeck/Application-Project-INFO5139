import Post from './Post';
import './styles.scss';
import { useState, useEffect } from 'react';
import { database, auth } from '../../firebase';
import { doc, getDoc } from '@firebase/firestore';

export default function Posts({ posts }) {
  const [postList, setPostList] = useState([]);
  const [unlikedPosts, setUnlikedPosts] = useState([]);
  const [isHidden, setIsHidden] = useState(false);
  /**
   *
   * @param {int} postsToAdd
   * Number of posts to be added each time function is called.
   * @returns
   * An array with "postsToAdd" number of posts.
   */
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const userRef = doc(database, 'users', user.uid);
        getDoc(userRef).then((doc) => {
          if (doc.exists()) {
            setUnlikedPosts(doc.data().hiddenPosts);
          }
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const getPosts = (postsToAdd) => {
    var newPosts = [];

    for (let i = 0; i <= postsToAdd; i++) {
      var postIndex = Math.floor(Math.random() * (posts.length - 1));
      newPosts.push(posts[postIndex]);
    }
    return newPosts;
  };

  // This is run only on the first render - ie. before we've added any posts
  if (postList.length === 0) {
    var newPosts = getPosts(12);

    for (let i = 0; i < newPosts.length - 1; i++) {
      setPostList((postList) => [...postList, newPosts[i]]);
    }
  }
  // end of first run code
  const handleClick = () => {
    var newPosts = getPosts(6);
    for (let i = 0; i < newPosts.length - 1; i++) {
      setPostList((postList) => [...postList, newPosts[i]]);
    }
  };
  const handleFilter = () => {
    setIsHidden(!isHidden);
  };
  const filteredPosts = isHidden
    ? posts.filter((post) => !unlikedPosts.includes(post.id))
    : postList;
  console.log(postList);
  return (
    <main>
      <div className='posts-component'>
        {filteredPosts.length === 0 && 'No Posts to show!'}
        {filteredPosts.map((post, index) => (
          <Post {...post} key={index} />
        ))}
      </div>

      <div className='more-posts-button'>
        <button onClick={handleClick}>Load More Posts</button>
        <button onClick={handleFilter}>
          {isHidden ? 'Show Hidden Posts' : 'Hide Unliked Posts'}
        </button>
      </div>
    </main>
  );
}
