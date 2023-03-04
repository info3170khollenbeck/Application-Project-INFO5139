import './styles.scss';
import React, { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Header({ setShowSignin }) {
  const [error, setError] = useState('');
  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignUp(e) {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      setError('');
      setShowSignin(false);
      console.log('success');
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
        <Form>
          <input type='email' placeholder='Email' ref={emailRef} />
          <input type='password' placeholder='Password' ref={passwordRef} />
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
      </div>
    </>
  );
}
