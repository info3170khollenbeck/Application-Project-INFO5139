import Post from '../../components/Posts/Post';
import samplePosts from '../../content/posts';
import { useParams } from 'react-router-dom';
import './styles.scss';

export default function PostPage() {
  const posts = samplePosts;
  const params = useParams();

  const post = posts.find((post) => post.id === params.id);
  // using strict equality (=== operator) breaks the above line.

  if (!post) {
    console.log('404');
    return <div>404</div>;
  }

  return (
    <div className='post-page-component'>
      <Post {...post} />
    </div>
  );
}
