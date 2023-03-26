import React from 'react';
import LikedPosts from '../../components/LikedPosts';
import samplePosts from '../../content/posts';

function LikedPostPage() {
  const posts = samplePosts;

  return <LikedPosts post={posts} />;
}

export default LikedPostPage;
