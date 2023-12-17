import { useState } from "react";
import "./News.css";
export const News = ({
  news: { title, url, urlToImage, description, content, author, publishedAt },
}) => {
  const [seeNews, setSeeNews] = useState(false);
  //   console.log(news);
  // console.log(description);
  const handleSeeDetails = () => {
    setSeeNews(!seeNews);
  };
  return (
    <>
      {seeNews ? (
        <div className="seeDetails singleNews">
          <div className="img">
            <img src={urlToImage} alt="" />
            <div className="overly"></div>
          </div>
          <div className="news-info">
            <h3>{author}</h3>

            <h1>{title}</h1>
            <p>{description}</p>
            <p>{content}</p>
            <span>{publishedAt}</span>
            <br />
            <a href={url} target="blank">
              See the site of that news...
            </a>

            <div className="button seeDetailsBtn">
              <button onClick={handleSeeDetails}>
                {seeNews ? "See less" : "See details"}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="singleNews">
          <div className="img">
            <img src={urlToImage} alt="" />

            <div className="overly"></div>
          </div>
          <div className="news-info">
            <h1>{title.slice(0, 20)}...</h1>
            <p>
              <p>{description}</p>
            </p>
            <div className="button">
              <button onClick={handleSeeDetails}>See details</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
