import './styles.scss';
import React, { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { auth, database } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';

export default function Header({ setShowSignin }) {
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignUp(e) {
    e.preventDefault();
    try {
      // Create a new user with Firebase Authentication
      await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      await setDoc(doc(database, 'users', auth.currentUser.uid), {
        email: emailRef.current.value,
        password: passwordRef.current.value,
        liked: [],
        hidden: [],
      });
      // Set state and clear errors
      setError('Your account have created!');
      setShowSignin(false);
      setUserEmail(emailRef.current.value);
    } catch (error) {
      setError('Failed to create an account');
    }
  }

  async function handleSignIn(e) {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      setError('');
      setShowSignin(false);
      setLoggedIn(true);
      setUserEmail(emailRef.current.value);
    } catch (error) {
      setError('Failed to sign in');
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (e.target.name === 'signup') {
      await handleSignUp(e);
      console.log('sc');
    } else if (e.target.name === 'signin') {
      await handleSignIn(e);
      console.log('sc');
    }
  }

  return (
    <>
      <div className='header-component'>
        <h1>BloomScroll</h1>
        {loggedIn ? (
          <p>Welcome and Enjoy! {userEmail}!</p>
        ) : (
          <Form>
            <input
              type='email'
              className='input-element'
              placeholder='Email'
              ref={emailRef}
            />
            <input
              type='password'
              className='input-element'
              placeholder='Password'
              ref={passwordRef}
            />
            <button
              name='signup'
              onClick={handleSubmit}
              className='signup-button'
            >
              Sign Up
            </button>
            <button
              name='signin'
              onClick={handleSubmit}
              className='signup-button'
            >
              Sign In
            </button>
          </Form>
        )}
        {error && <p>{error}</p>}
      </div>
    </>
  );
}
