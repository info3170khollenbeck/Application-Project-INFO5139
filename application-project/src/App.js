import Header from './components/Header';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';

function App() {
  const [showSignin, setShowSignin] = useState(false);

  return (
    <>
      <Header signin={showSignin} setShowSignin={setShowSignin} />
      {showSignin && 'Sign In Component'}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='posts/:id' element={<PostPage />} />
      </Routes>
    </>
  );
}

export default App;
