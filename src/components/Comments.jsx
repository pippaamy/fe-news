import { useContext, useEffect, useState } from "react";
import { deleteComment, getComments } from "../api";
import { useParams } from "react-router-dom";
import dateFormat from "dateformat";
import NewComment from "./NewComment";
import CommentBox from "./CommentBox";
import { UserContext } from "./User";

const Comments = ({ article }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({});
  const { article_id } = useParams();
  const { currentUser } = useContext(UserContext);

  const refreshPage = () => {
    window.parent.location = window.parent.location.href;
  };

  const handleClick = (comment) => {
    return function () {
      if (window.confirm("This comment will be deleted, is that okay?")) {
        deleteComment(comment.comment_id).then((res) => {
          alert("Comment deleted");
          refreshPage();
        });
      }
    };
  };

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
        <NewComment newComment={newComment} />

        <br />
        {comments.map((comment) => {
          return (
            <>
              <li className="comments" key={comment.comment_id}>
                <h2>{comment.author}</h2>
                <p>{comment.body}</p>
                <p>{dateFormat(comment.created_at, "mmmm dS, yyyy")}</p>
                {currentUser.username === comment.author && (
                  <button
                    className="delete"
                    id={comment.comment_id}
                    onClick={handleClick(comment)}
                  >
                    Delete
                  </button>
                )}
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
