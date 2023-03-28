import './styles.scss';
import React, { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { MdErrorOutline } from 'react-icons/md';
import { HiUser } from 'react-icons/hi';
import { NavLink, Link } from 'react-router-dom';

export default function Header({ setShowSignin }) {
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [showLoginFields, setShowLoginFields] = useState(false);
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
      setLoggedIn(true);
      setUserEmail(emailRef.current.value);
      console.log('User created!', emailRef.current.value);
    } catch (error) {
      setError('Account creation failed. Please try again.');
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
      console.log('User logged in!', emailRef.current.value);
    } catch (error) {
      setError(
        'Sign-in failed. Please check your email and password, and try again.'
      );
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    if (showLoginFields) {
      if (e.target.name === 'signup') {
        await handleSignUp(e);
        console.log('signup handled');
      } else if (e.target.name === 'signin') {
        await handleSignIn(e);
        console.log('signin handled');
      }
    } else {
      setShowLoginFields(true);
    }
  }

  const getEmailUsername = (email) => {
    const myArray = email.split('@');
    return myArray[0];
  };

  return (
    <>
      <div className='header-component'>
        <h1>
          <NavLink to='/'>BloomScroll</NavLink>
        </h1>
        {loggedIn ? (
          <div className='nav'>
            <p className='user-greeting'>
              <HiUser /> {getEmailUsername(userEmail)}
            </p>
            <div className='link'>
              <Link to='/posts/liked' className='nav-link'>
                Liked Posts
              </Link>
              <br />
              <Link to='/posts/unliked' className='nav-link'>
                unliked Posts
              </Link>
            </div>
          </div>
        ) : (
          <Form>
            {showLoginFields && (
              <>
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
              </>
            )}

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
            {error && (
              <span className='error-message'>
                <MdErrorOutline className='error-icon' />
                {error}
              </span>
            )}
          </Form>
        )}
      </div>
    </>
  );
}
