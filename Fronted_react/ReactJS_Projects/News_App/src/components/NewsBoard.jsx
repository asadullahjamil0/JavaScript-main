import { useEffect, useState } from "react"
import NewsItem from "./NewsItem"

const NewsBoard = () => {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    //getting information from NEWS Headlines API
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
    fetch(url)
      .then(response => response.json())
      .then(data => setArticles(data.articles))
  }, [])
  return (
    <div>
      <h1 className="text-center">Latest <span className="bg-danger badge">News</span></h1>
      {/* Displaying data on the web page by using map function */}
      {articles.map((news, index) => {
        return <NewsItem
          key={index}
          title={news.title}
          description={news.description}
          src={news.urlToImage}
          linkSrc={news.url}
        />
      })}
    </div>
  )
}

export default NewsBoard
