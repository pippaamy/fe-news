import { useContext, useEffect, useState } from "react";
import { deleteComment, getComments } from "../api";
import { useParams } from "react-router-dom";
import dateFormat from "dateformat";
import NewComment from "./newComment";
import CommentBox from "./CommentBox";
import { UserContext } from "./User";
import CommentVotes from "./CommentVotes";
import Loading from "./Loading";

const Comments = ({ article }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({});
  const { article_id } = useParams();
  const { currentUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);

  const refreshPage = () => {
    window.parent.location = window.parent.location.href;
  };

  const handleClick = (comment) => {
    return function () {
      if (window.confirm("This comment will be deleted, is that okay?")) {
        deleteComment(comment.comment_id).then(() => {
          alert("Comment deleted");
          refreshPage();
        });
      }
    };
  };

  useEffect(() => {
    getComments(article_id).then((comments) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, [article_id]);
  if (isLoading) return <Loading />;
  return (
    <section>
      <CommentBox
        article={article}
        newComment={newComment}
        setNewComment={setNewComment}
      />
      <ul>
        <br />
        <NewComment newComment={newComment} />

        <br />
        {comments.map((comment) => {
          return (
            <section key={comment.comment_id}>
              <li className="text-lg tracking-tight font-medium text-justify rounded-xl p-3  bg-[#F8B595]">
                <h2 className="font-bold">{comment.author}</h2>

                <p>{comment.body}</p>
                <p>{dateFormat(comment.created_at, "mmmm dS, yyyy")}</p>
                {currentUser.username !== comment.author && (
                  <CommentVotes comment={comment} />
                )}
                {currentUser.username === comment.author && (
                  <>
                    <img
                      className="p-3 w-24 flex "
                      src={currentUser.avatar_url}
                      alt={currentUser.username}
                    ></img>
                    <p className="font-bold">Votes : {comment.votes}</p>
                    <button
                      className="bg-[#C06C84] font-mono  rounded-xl p-2"
                      id={comment.comment_id}
                      onClick={handleClick(comment)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </li>
              <br />
            </section>
          );
        })}
      </ul>
    </section>
  );
};

export default Comments;
