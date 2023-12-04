import { useEffect, useState } from "react";
import { getArticles } from "../api";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";
import Topic from "./Topic";
import Sort from "./Sort";

import Post from "./Post";

const Articles = ({ topics, setTopics }) => {
  const [articles, setArticles] = useState([]);
  const [chosenTopic, setChosenTopic] = useState("");
  const [sort, setSort] = useState("created_at");
  const [order, setOrder] = useState("ASC");
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    getArticles(chosenTopic, sort, order)
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch(() => {
        setErr(true);
        setIsLoading(false);
      });
  }, [chosenTopic, sort, order]);

  if (isLoading) return <p className="loading-errors">Loading Articles...</p>;
  if (err)
    return (
      <p className="loading-errors">
        Sorry there has been a problem, please try again!
      </p>
    );
  return (
    <section>
      <Topic
        setChosenTopic={setChosenTopic}
        chosenTopic={chosenTopic}
        sort={sort}
        order={order}
        topics={topics}
        setTopics={setTopics}
      />
      <Sort sort={sort} setSort={setSort} order={order} setOrder={setOrder} />
      <Post topics={topics} />
      <ul>
        {articles.map((article) => {
          return (
            <>
              <Link to={`/articles/${article.article_id}`}>
                <li key={article.article_id} className="articles">
                  <h2>{article.title}</h2>
                  <img className="image" src={article.article_img_url} />
                  <p className="date">
                    {dateFormat(article.created_at, "mmmm dS, yyyy")}
                  </p>
                  <p className="author">{article.author}</p>
                </li>
                <br />
              </Link>
            </>
          );
        })}
      </ul>
    </section>
  );
};

export default Articles;
