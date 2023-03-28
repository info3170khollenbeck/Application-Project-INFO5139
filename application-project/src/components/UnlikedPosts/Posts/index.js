import './styles.scss';
import { useState } from 'react';
import { database, auth } from '../../../firebase';
import {
  doc,
  deleteDoc,
  getDoc,
  updateDoc,
  arrayRemove,
} from 'firebase/firestore';
import { BiRedo } from 'react-icons/bi';
export default function UnlikedPost({ id, title, type, img, body, source }) {
  const [isHidden, setIsHidden] = useState(true);
  const handleDelete = async (postId) => {
    setIsHidden(false);
    const user = auth.currentUser;
    const userRef = doc(database, 'users', user.uid);
    const userData = await getDoc(userRef);
    if (userData.exists()) {
      const hiddenPosts = userData.data().hiddenPosts;
      const postIndex = hiddenPosts.indexOf(postId);
      if (postIndex !== -1) {
        hiddenPosts.splice(postIndex, 1);
        await updateDoc(userRef, { hiddenPosts });
      }
    }
  };

  return isHidden ? (
    <div key={id} className={'post-component ' + type}>
      {title && <h3>{title}</h3>}
      {body && <p>{body}</p>}
      {img && <img className='post-img' src={img} alt={title} />}
      {source && (
        <div className='source-field'>
          <strong>Source: </strong>
          <a href={source}>{source}</a>
        </div>
      )}
      <button onClick={() => handleDelete(id)}>
        <BiRedo size={30} />
      </button>
    </div>
  ) : null;
}
