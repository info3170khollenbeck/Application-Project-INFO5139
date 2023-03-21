import "./styles.scss";
import "../../../styles/variables.scss";
import { BsFillSuitHeartFill } from 'react-icons/bs'

const likePost = (event) => {
  console.log("Hello there Like");
  event.target.style.color = "#b57ba6";
}

export default function Post({ title, type, img, body, source }) {
  return (
      <div className={type}>
        {title && <h3>{title}</h3>}
        {body && <p>{body}</p>}
        {img && <img className="post-img" src={img} alt={title} />}
        {source && (
          <div className="source-field">
            <strong>Source: </strong>
            <a href={source}>{source}</a>
          </div>
        )}
        <button className="likeButton" onClick={likePost}><BsFillSuitHeartFill size={30}/></button>
      </div>
  );
}
