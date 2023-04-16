import { updateDoc, doc } from 'firebase/firestore';
import { database } from '../firebase';
import { auth } from '../firebase';

async function SaveDarkmodePref(pref) {
  const user = auth.currentUser;
  const ref = doc(database, 'users', user.uid);

  try {
    await updateDoc(ref, {
      prefersDarkmode: pref,  
    });
    console.log('Saved darkmode preference to database.');
  } catch (error) {
    console.error(error);
  }
}

export { SaveDarkmodePref };