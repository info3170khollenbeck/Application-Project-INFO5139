import React from 'react';
import UnLikedPosts from '../../components/UnlikedPosts';
import samplePosts from '../../content/posts';

function UnlikedPage() {
  const posts = samplePosts;

  return <UnLikedPosts post={posts} />;
}

export default UnlikedPage;
