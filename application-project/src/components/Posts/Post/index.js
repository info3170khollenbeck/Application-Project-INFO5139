export default function Post({
    title,
    type,
    img,
    body
}) {
    return (
        <div>
            <h3>{title}</h3>
            <div><p>{body}</p></div>
            {img && <div><img src={img} alt={title} width={100} /></div>}
        </div>
    )
}
