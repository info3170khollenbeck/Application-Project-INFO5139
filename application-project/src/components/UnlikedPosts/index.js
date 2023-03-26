import './styles.scss';
import UnlikedPost from './Posts/index';
import { useState, useEffect } from 'react';
import { database, auth } from '../../firebase';
import { doc, getDoc } from '@firebase/firestore';

function UnlikedPosts({ post }) {
  const [userData, setUserData] = useState(null);
  const [unlikedPosts, setunLikedPosts] = useState([]);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const userRef = doc(database, 'users', user.uid);
        getDoc(userRef).then((doc) => {
          if (doc.exists()) {
            setUserData(doc.data());
            setunLikedPosts(doc.data().hiddenPosts);
          }
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
  const likedSamplePosts = post.filter((post) =>
    unlikedPosts.includes(post.id)
  );

  return (
    <main>
      <div className='posts-component'>
        {likedSamplePosts.length === 0 && 'No hidden posts to show!'}
        {likedSamplePosts.map((post) => (
          <UnlikedPost
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

export default UnlikedPosts;
