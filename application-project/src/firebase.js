// Import the functions you need from the SDKs you need
import { initializeApp } from '@firebase/app';
import { getAuth } from '@firebase/auth';

import { getFirestore } from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAx8cDTHYQgVCmutCxNBqHqcIh-BCrM3rI',
  authDomain: 'application-project-ad915.firebaseapp.com',
  projectId: 'application-project-ad915',
  storageBucket: 'application-project-ad915.appspot.com',
  messagingSenderId: '459687782913',
  appId: '1:459687782913:web:16a8b26f24824df760ae00',
  measurementId: 'G-T8E3YCZHVY',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
