import './styles.scss';
import '../../../styles/variables.scss';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { auth, database } from '../../../firebase';
import {
  doc,
  updateDoc,
  arrayUnion,
  getDoc,
  setDoc,
} from '@firebase/firestore';

async function likePost(event, id) {
  console.log('this is working!');
  event.target.style.color = '#b57ba6';
  const userDocRef = doc(database, 'users', auth.currentUser.uid);
  const userDoc = await getDoc(userDocRef);
  if (!userDoc.exists()) {
    // create user document if it doesn't exist
    await setDoc(userDocRef, { likedPosts: [] });
  }
  // add post to likedPosts array
  await updateDoc(userDocRef, {
    likedPosts: arrayUnion(id),
  });
}

export default function Post({ id, title, type, img, body, source }) {
  return (
    <div className={type}>
      {title && <h3>{title}</h3>}
      {body && <p>{body}</p>}
      {img && <img className='post-img' src={img} alt={title} />}
      {source && (
        <div className='source-field'>
          <strong>Source: </strong>
          <a href={source}>{source}</a>
        </div>
      )}
      <button className='likeButton' onClick={(event) => likePost(event, id)}>
        <BsFillSuitHeartFill size={30} />
      </button>
    </div>
  );
}
