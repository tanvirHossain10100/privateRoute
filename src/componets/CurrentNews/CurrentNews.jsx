import { useLoaderData } from "react-router";
import { News } from "./News/News";
import "./CurrentNews.css";

export const CurrentNews = () => {
  const news = useLoaderData();
  const { articles } = news;
  return (
    <>
      <div className="currentNews">Total Total:{news.articles?.length}</div>
      <div className="newsContainer">
        {articles.map((news, index) => (
          <News key={index} news={news}></News>
        ))}
      </div>
    </>
  );
};
