import './styles.scss';


export default function Post({ title, type, img, body, source }) {
  return (

          
            <div className="container">
              <div className="row" class="d-flex justify-content-center">
                <div className="col-md-5">
                  <section>
                    <div class="shadow p-3 mb-5 bg-white rounded">
                      <div className={type}>
                        <div>
                            <p>
                            {title && <h3 className="card-title">{title}</h3>}
                            </p>
                        </div>
                        <div>
                            {body && <p>{body}</p>}
                            {img && <img className='post-img' src={img} alt={title} />}
                        </div>
                        <div>
                            {source && (
                              <div className='source-field'>
                                <strong>Source: </strong>
                                <a href={source}>{source}</a>
                              </div>
                            )}
                        </div>
                                <div className='like-field'>
                                  <button type="button" class="btn btn-danger float-left">Like</button>
                                  <span class="btn btn-secondary float-right">likes</span>
                                </div>
                        </div>
                      </div>
                    </section>
                  </div>
              </div>
            </div>
          
    );
}
