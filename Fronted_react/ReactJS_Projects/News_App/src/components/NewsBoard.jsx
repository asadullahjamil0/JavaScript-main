import { useEffect, useState } from "react"
import NewsItem from "./NewsItem"

const NewsBoard = () => {

  const [articles, setArticles] = useState([])
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=c1f3ad9bd68440dfb3dea032ed1fcf57`
    fetch(url)
      .then(response => response.json())
      .then(data => setArticles(data.articles))
  }, [])

  console.log(articles);


  return (
    <div>
      <h1 className="text-center">Latest <span className="bg-danger badge">News</span></h1>
      {articles.map((news, index) => {
        <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} />
      })}
    </div>
  )
}

export default NewsBoard
