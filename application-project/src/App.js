import Header from './components/Header';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LikedPage from './pages/LikedPostPage';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import UnlikedPage from './pages/UnlikedPage';

function App() {
  const [showSignin, setShowSignin] = useState(false);

  return (
    <>
      <Header signin={showSignin} setShowSignin={setShowSignin} />
      {showSignin && 'Sign In Component'}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='posts/:id' element={<PostPage />} />
        <Route path='posts/liked' element={<LikedPage />}></Route>
        <Route path='posts/unliked' element={<UnlikedPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
