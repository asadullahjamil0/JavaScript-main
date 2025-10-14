import image from "../assets/news-2444778.jpg"

const NewsItem = (props) => {

  return (
    <div className="card bg-dark text-light d-inline-flex m-5 " style={{ maxWidth: "250px" }}>
      <img src={props.src ? props.src : image} style={{ height: "150px" }} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title.slice(0, 50)}</h5>
        <p className="card-text">{props.description ? props.description.slice(0, 50) : "News about current event. It is information about something that has just happened."}</p>
        <a href={props.linkSrc} className="btn btn-primary" target="_blank">Read More</a>
      </div>
    </div>
  )
}

export default NewsItem
