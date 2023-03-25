import { useState, useEffect } from 'react';
import { database, auth } from '../../firebase';
import { doc, getDoc } from '@firebase/firestore';
import samplePosts from '../../content/posts';
import './styles.scss';
function LikedPostPage() {
  const [userData, setUserData] = useState(null);
  const [likedPosts, setLikedPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const userRef = doc(database, 'users', user.uid);
        getDoc(userRef).then((doc) => {
          if (doc.exists()) {
            setUserData(doc.data());
            console.log(userData);
            setLikedPosts(doc.data().likedPosts);
          }
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const likedSamplePosts = samplePosts.filter((post) =>
    likedPosts.includes(post.id)
  );

  return (
    <div className='posts-component'>
      {likedSamplePosts.map((post) => (
        <div key={post.id} className={'post'}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          {post.img && (
            <img className='post-img' src={post.img} alt={post.title}></img>
          )}
          {post.source && (
            <div className='source-field'>
              <strong>Source: </strong>
              <a href={post.source}>{post.source}</a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default LikedPostPage;
