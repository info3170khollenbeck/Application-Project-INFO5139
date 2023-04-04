import { useEffect, useState } from 'react';
import Posts from '../../components/Posts';
import * as database from '../../database';

export default function HomePage() {
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

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

	return <> {!isLoading && <Posts posts={posts} />}
  {isLoading && <div>Loading posts...</div>}</>;
}
