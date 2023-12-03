import { useEffect, useState } from "react";
import { getArticles } from "../api";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";
import Topic from "./Topic";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [chosenTopic, setChosenTopic] = useState("");
  useEffect(() => {
    getArticles(chosenTopic).then((articles) => {
      setArticles(articles);
    });
  }, [chosenTopic]);

  return (
    <section>
      <Topic setChosenTopic={setChosenTopic} chosenTopic={chosenTopic} />
      <ul>
        {articles.map((article) => {
          return (
            <>
              <Link
                to={`/articles/${article.article_id}`}
                key={article.article_id}
              >
                <li className="articles" key={article.article_id}>
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
