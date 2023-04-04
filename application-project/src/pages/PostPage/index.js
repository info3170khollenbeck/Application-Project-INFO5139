import Post from '../../components/Posts/Post';
import { useParams } from 'react-router-dom';
import './styles.scss';
import * as database from '../../database';
import { useEffect, useState } from 'react';

export default function PostPage() {
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

	const params = useParams();

	const post = posts.find((post) => post.id === params.id);
	// using strict equality (=== operator) breaks the above line.

	if (!post) {
		console.log('404');
		return <div>404</div>;
	}

	return (
		<div className='post-page-component'>
			{isLoading && <div>Loading...</div>}
			{!isLoading && <Post {...post} />}
		</div>
	);
}
