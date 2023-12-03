import { useEffect, useState } from "react";
import { getArticles } from "../api";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";
import Topic from "./Topic";
import Sort from "./Sort";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [chosenTopic, setChosenTopic] = useState("");
  const [sort, setSort] = useState("created_at");
  const [order, setOrder] = useState("ASC");
  useEffect(() => {
    getArticles(chosenTopic, sort, order).then((articles) => {
      setArticles(articles);
    });
  }, [chosenTopic, sort, order]);

  return (
    <section>
      <Topic
        setChosenTopic={setChosenTopic}
        chosenTopic={chosenTopic}
        sort={sort}
        order={order}
      />
      <Sort sort={sort} setSort={setSort} order={order} setOrder={setOrder} />
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
