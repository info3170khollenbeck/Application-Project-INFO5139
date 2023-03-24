import "./styles.scss";
import "../../../styles/variables.scss";
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { BiHide } from 'react-icons/bi';
import { useState } from 'react';


export default function Post({ title, type, img, body, source }) {
  const [isHidden, setIsHidden] = useState(true);

  const likePost = (event) => {
    console.log("Hello there Like");
    event.target.style.color = "#ce48aa";
  }

  const hidePost = () => {
    console.log("The content is now hidden");
    setIsHidden(false);
  }


  return isHidden ? (
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
        <div className="buttonDiv">
          <button className="likeButton" onClick={likePost}><BsFillSuitHeartFill size={30}/></button>
          <button className="hideButton" onClick={hidePost}><BiHide size={30}/></button>
        </div>
      </div>
  ) : null;
}
