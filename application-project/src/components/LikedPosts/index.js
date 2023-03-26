import './styles.scss';

import LikedPost from './Posts/index';
import { useState, useEffect } from 'react';
import { database, auth } from '../../firebase';
import { doc, getDoc } from '@firebase/firestore';

function LikedPosts({ post }) {
  const [userData, setUserData] = useState(null);
  const [likedPosts, setLikedPosts] = useState([]);
  console.log(post);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const userRef = doc(database, 'users', user.uid);
        getDoc(userRef).then((doc) => {
          if (doc.exists()) {
            setUserData(doc.data());
            setLikedPosts(doc.data().likedPosts);
          }
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, [userData]);
  const likedSamplePosts = post.filter((post) => likedPosts.includes(post.id));

  return (
    <main>
      <div className='posts-component'>
        {likedSamplePosts.length === 0 && 'No liked posts to show!'}
        {likedSamplePosts.map((post) => (
          <LikedPost
            key={post.id}
            id={post.id}
            title={post.title}
            type={post.type}
            img={post.img}
            body={post.body}
            source={post.source}
          />
        ))}
      </div>
    </main>
  );
}

export default LikedPosts;
