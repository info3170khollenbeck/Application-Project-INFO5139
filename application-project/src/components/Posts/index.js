import Post from './Post';
import { useState } from 'react';
import './styles.scss';

export default function Posts({ posts }) {
	const [postList, setPostList] = useState([]);

	/**
	 *
	 * @param {int} postsToAdd
	 * Number of posts to be added each time function is called.
	 * @returns
	 * An array with "postsToAdd" number of posts.
	 */
	const getPosts = (postsToAdd) => {
		var newPosts = [];

		for (let i = 0; i <= postsToAdd; i++) {
			var postIndex = Math.floor(Math.random() * (posts.length - 1));
			newPosts.push(posts[postIndex]);
		}
		return newPosts;
	};

	// This is run only on the first render - ie. before we've added any posts
	if (postList.length === 0) {
		var newPosts = getPosts(12);

		for (let i = 0; i < newPosts.length - 1; i++) {
			setPostList((postList) => [...postList, newPosts[i]]);
		}
	}
	// end of first run code

	const handleClick = () => {
		var newPosts = getPosts(6);
		for (let i = 0; i < newPosts.length - 1; i++) {
			setPostList((postList) => [...postList, newPosts[i]]);
		}
	};

	return (
		<main>
			<div className='posts-component'>
				{postList.length === 0 && 'No Posts to show!'}
				{postList.map((post, index) => (
					<Post {...post} key={index} />
				))}
			</div>

			<div className='more-posts-button'>
				<button onClick={handleClick}>Load More Posts</button>
			</div>
		</main>
	);
}
