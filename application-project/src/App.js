import Header from './components/Header';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LikedPage from './pages/LikedPostPage';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import UnlikedPage from './pages/UnlikedPage';
import * as database from './database';

function App() {
	const [showSignin, setShowSignin] = useState(false);
	const [darkMode, setDarkMode] = useState(false);
	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		(async () => {
			const isLoggedIn = await database.IsUserLoggedIn();
			if (isLoggedIn) {
				setLoggedIn(true);
				const preference = await database.GetDarkmodePref();
				setDarkMode(preference);
				console.log('Darkmode? ', preference);
			}
		})();
	}, []);

	useEffect(() => {
		(async () => {
			if (loggedIn) {
				const preference = await database.GetDarkmodePref();
				setDarkMode(preference);
			}
		})();
	}, [loggedIn]);

	const toggleDarkmode = () => {
		const currentDarkMode = darkMode;
		setDarkMode(!darkMode);
		if (loggedIn) {
			database.SaveDarkmodePref(!currentDarkMode);
		}
	};

	return (
		<div className={'darkmode-' + darkMode}>
			<Header
				signin={showSignin}
				setShowSignin={setShowSignin}
				darkmode={darkMode}
				toggleDarkmode={toggleDarkmode}
				loggedIn={loggedIn}
				setLoggedIn={setLoggedIn}
			/>
			{showSignin && 'Sign In Component'}
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='posts/:id' element={<PostPage />} />
				<Route path='posts/liked' element={<LikedPage />}></Route>
				<Route path='posts/unliked' element={<UnlikedPage />}></Route>
			</Routes>
		</div>
	);
}

export default App;
