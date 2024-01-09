import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import dateFormat from "dateformat";
import Comments from "./Comments";
import Votes from "./Votes";

const ArticleCard = () => {
  const { article_id } = useParams();

  const [article, setArticle] = useState({});
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticleById(article_id)
      .then((article) => {
        setArticle(article);
        setIsLoading(false);
      })
      .catch(() => {
        setErr(true);
        setIsLoading(false);
      });
  }, [article_id]);

  if (err)
    return (
      <p className="loading-error">
        This article does not exist, please try another
      </p>
    );
  if (isLoading) return <p className="loading-errors">Loading Article...</p>;

  return (
    <>
      <section className="p-5">
        <article className="text-xl tracking-tight font-medium text-justify rounded-xl p-3  bg-[#F8B595] ">
          <h2>{article.title}</h2>
          <p>{article.body}</p>
          <img className="image" src={article.article_img_url} />
          <p className="date">
            {dateFormat(article.create_at, "mmmm dS, yyyy")}
          </p>
          <p className="author">{article.author}</p>
          <p> Comments: {article.comment_count}</p>
        </article>
        <div>
          <Votes article={article} />
        </div>
        <section>
          <Comments article={article} />
        </section>
      </section>
    </>
  );
};

export default ArticleCard;
