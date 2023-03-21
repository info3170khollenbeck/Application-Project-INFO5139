import './styles.scss';
import React, { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
<<<<<<< HEAD
import { auth, database } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
=======
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { signInWithEmailAndPassword } from '@firebase/auth';
>>>>>>> 55c842ab9c230335190bf8f64e408bec1716c530

export default function Header({ setShowSignin }) {
	const [error, setError] = useState('');
	const [loggedIn, setLoggedIn] = useState(false);
	const [userEmail, setUserEmail] = useState('');
	const [showLoginFields, setShowLoginFields] = useState(false);
	const emailRef = useRef();
	const passwordRef = useRef();

<<<<<<< HEAD
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
=======
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
			console.log('User logged in!', emailRef.current.value);
		} catch (error) {
			setError('Failed to sign in');
		}
	}

	async function handleSubmit(e) {
		e.preventDefault();
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
>>>>>>> 55c842ab9c230335190bf8f64e408bec1716c530
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

<<<<<<< HEAD
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
=======
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
			</div>
		</>
	);
>>>>>>> 55c842ab9c230335190bf8f64e408bec1716c530
}
