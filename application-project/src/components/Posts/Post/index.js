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
import { BiHide, BiShareAlt } from 'react-icons/bi';
import { useState } from 'react';

export default function Post({ id, title, type, img, body, source }) {
  const [isHidden, setIsHidden] = useState(true);
  const [showClipboardText, setShowClipboardText] = useState(false);
  const [copiedMessageVisible, setCopiedMessageVisible] = useState('hidden');

  async function likePost(event, id) {
    console.log('liked!');
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

  const hidePost = async (id) => {
    console.log('The content is now hidden');
    setIsHidden(false);
    const userDocRef = doc(database, 'users', auth.currentUser.uid);
    await updateDoc(userDocRef, {
      hiddenPosts: arrayUnion(id),
    });
  };

  // Since there's no dedicated URL, this shares to localhost:3000/posts/:id
  // if you're not using port 3000, you will need to adjust this function.
  const sharePost = () => {
    let url = 'localhost:3000/posts/' + id;
    navigator.clipboard.writeText(url);
    // setShowClipboardText(true);
    setCopiedMessageVisible('visible');
    setTimeout(() => {
      // setShowClipboardText(false);
      setCopiedMessageVisible('hidden');
    }, 2000);
  };

  return isHidden ? (
    <div className={'post-component ' + type}>
      {title && <h3>{title}</h3>}
      {body && <p>{body}</p>}
      {img && <img className='post-img' src={img} alt={title} />}
      {source && (
        <div className='source-field'>
          <strong>Source: </strong>
          <a href={source}>{source}</a>
        </div>
      )}
      <div className='buttonDiv'>
        <button className='likeButton' onClick={(event) => likePost(event, id)}>
          <BsFillSuitHeartFill size={30} />
        </button>

        <button className='hideButton' onClick={() => hidePost(id)}>
          <BiHide size={30} />
        </button>
        <button className='shareButton' onClick={sharePost}>
          <BiShareAlt size={30} />
          <span className={'copied-text-alert ' + copiedMessageVisible}>
            Link copied!
          </span>
        </button>
      </div>
    </div>
  ) : null;
}
