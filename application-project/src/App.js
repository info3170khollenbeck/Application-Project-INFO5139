import Header from './components/Header';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import LikedPosts from './pages/LikedPostPage';

function App() {
  const [showSignin, setShowSignin] = useState(false);

  return (
    <>
      <Header signin={showSignin} setShowSignin={setShowSignin} />
      {showSignin && 'Sign In Component'}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='posts/:id' element={<PostPage />} />
        <Route path='posts/liked' element={<LikedPosts />}></Route>
      </Routes>
    </>
  );
}

export default App;
