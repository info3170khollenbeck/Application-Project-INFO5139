import './styles.scss';
import '../../../styles/variables.scss';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { BiHide, BiShareAlt } from 'react-icons/bi';
import { useState } from 'react';

export default function Post({ id, title, type, img, body, source }) {
	const [isHidden, setIsHidden] = useState(true);

	const likePost = (event) => {
		console.log('Hello there Like');
		event.target.style.color = '#ce48aa';
	};

	const hidePost = () => {
		console.log('The content is now hidden');
		setIsHidden(false);
	};

	// Since there's no dedicated URL, this shares to localhost:3000/posts/:id
	// if you're not using port 3000, you will need to adjust this function.
	const sharePost = () => {
		let url = 'localhost:3000/posts/' + id;
		navigator.clipboard.writeText(url);
	};

	return isHidden ? (
		<div className={'post-component ' + type}>
			{title && <h3>{title}</h3>}
			{body && <p>{body}</p>}
			{img && <img className='post-img' src={img} alt={title} />}
			{source && (
				<div className='source-field'>
					<strong>Source: </strong>
					<a href={source}>{source}</a>
				</div>
			)}
			<div className='buttonDiv'>
				<button className='likeButton' onClick={likePost}>
					<BsFillSuitHeartFill size={30} />
				</button>

				<button className='hideButton' onClick={hidePost}>
					<BiHide size={30} />
				</button>
				<button className='shareButton' onClick={sharePost}>
					<BiShareAlt size={30} />
				</button>
			</div>
		</div>
	) : null;
}
