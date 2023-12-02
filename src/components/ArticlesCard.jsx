import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import dateFormat from "dateformat";
import Comments from "./Comments";
import Votes from "./Votes";
import CommentBox from "./CommentBox";

const ArticleCard = () => {
  const { article_id } = useParams();

  const [article, setArticle] = useState({});

  useEffect(() => {
    getArticleById(article_id).then((article) => {
      setArticle(article);
    });
  }, [article_id]);
  return (
    <>
      <article className="articles">
        <h2>{article.title}</h2>
        <p>{article.body}</p>
        <img className="image" src={article.article_img_url} />
        <p className="date">{dateFormat(article.create_at, "mmmm dS, yyyy")}</p>
        <p className="author">{article.author}</p>
      </article>
      <div>
        {" "}
        <Votes article={article} />
      </div>
      <section>
        <CommentBox article={article} />
        <Comments />
      </section>
    </>
  );
};

export default ArticleCard;
