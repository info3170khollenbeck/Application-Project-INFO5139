import React from 'react';
import UnLikedPosts from '../../components/UnlikedPosts';
import * as database from '../../database';
import { useState, useEffect } from 'react';

function UnlikedPage() {
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
		<>
			{isLoading && <div>Loading...</div>}
			{!isLoading && <UnLikedPosts post={posts} />}
		</>
	);
}

export default UnlikedPage;
