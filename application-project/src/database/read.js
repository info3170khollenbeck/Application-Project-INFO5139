import { collection, getDocs } from 'firebase/firestore';
import { database } from '../firebase';

/**
 * Loads all documents from the Posts collection.
 * @returns 
 * Array with posts.
 */
export async function loadPosts() {
  try {
    const querySnapshot = await getDocs(collection(database, 'posts'));
    return processQuerySnapshot(querySnapshot);
  } catch (e) {
    throw new Error('Failed to load posts');
  }
}

function processQuerySnapshot(querySnapshot) {
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({
      ...doc.data(),
      id: doc.id,
    });
  });
  return data;
}