import React from 'react';
import LikedPosts from '../../components/LikedPosts';
import { useState, useEffect } from 'react';
import * as database from '../../database';

function LikedPostPage() {
	const [isLoading, setIsLoading] = useState(true);
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		(async () => {
			const data = await database.loadPosts();
			const postsFromDb = data.map((x) => {
				return { ...x };
			});
			setPosts(postsFromDb);
			setIsLoading(false);
		})();
	}, []);

	return (
		<main>
			{isLoading && <div>Loading...</div>}
			{!isLoading && <LikedPosts post={posts} />}
		</main>
	);
}

export default LikedPostPage;
