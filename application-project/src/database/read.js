import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { database } from '../firebase';
import { auth } from '../firebase';

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

function IsUserLoggedIn() {
	const user = auth.currentUser;
	if (user) {
		return true;
	} else {
		return false;
	}
}

async function GetDarkmodePref() {
  const user = auth.currentUser;
  const docRef = doc(database, 'users', user.uid);
  try {
    const userDoc = await getDoc(docRef);
    const userData = userDoc.data();
    const preference = userData.prefersDarkmode;
    return preference;
  } catch (error) {
    console.error(error);
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

export { IsUserLoggedIn, GetDarkmodePref };