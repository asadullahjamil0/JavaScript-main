
const NewsItem = (props) => {
  return (
    <div className="card d-inline-flex w-25 m-5">
      <img src={props.src} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.linkSrc} className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}

export default NewsItem
