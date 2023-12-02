import { useEffect, useState } from "react";
import { getComments } from "../api";
import { useParams } from "react-router-dom";
import dateFormat from "dateformat";
import NewComment from "./newComment";
import CommentBox from "./CommentBox";

const Comments = ({ article }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({});
  const { article_id } = useParams();

  useEffect(() => {
    getComments(article_id).then((comments) => {
      setComments(comments);
    });
  }, [article_id]);

  return (
    <section>
      <CommentBox
        article={article}
        newComment={newComment}
        setNewComment={setNewComment}
      />
      <ul>
        <li className="comments">
          <NewComment newComment={newComment} />
        </li>
        <br />
        {comments.map((comment) => {
          return (
            <>
              <li className="comments" key={comment.comment_id}>
                <h2>{comment.author}</h2>
                <p>{comment.body}</p>
                <p>{dateFormat(comment.created_at, "mmmm dS, yyyy")}</p>
              </li>
              <br />
            </>
          );
        })}
      </ul>
    </section>
  );
};

export default Comments;
