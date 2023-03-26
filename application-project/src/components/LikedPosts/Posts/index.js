import './styles.scss';

export default function LikedPost({ id, title, type, img, body, source }) {
  return (
    <div key={id} className={'post-component ' + type}>
      {title && <h3>{title}</h3>}
      {body && <p>{body}</p>}
      {img && <img className='post-img' src={img} alt={title} />}
      {source && (
        <div className='source-field'>
          <strong>Source: </strong>
          <a href={source}>{source}</a>
        </div>
      )}
    </div>
  );
}
