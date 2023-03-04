import "./styles.scss";

export default function Post({ title, type, img, body, source }) {
  return (
    <div className="post-component">
      <div className={type}>
        {title && <h3>{title}</h3>}
        {body && <p>{body}</p>}
        {img && (
          <div>
            <img className="post-img" src={img} alt={title} />
          </div>
        )}
        {source && (
          <div className="source-field">
            <strong>Source: </strong>
            <a href={source}>{source}</a>
          </div>
        )}
      </div>
    </div>
  );
}
