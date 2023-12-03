import { useContext, useState } from "react";
import { postComments } from "../api";
import { UserContext } from "./User";

const CommentBox = ({ article, setNewComment }) => {
  const id = article.article_id;
  const { currentUser } = useContext(UserContext);

  const postComment = (event) => {
    const body = event.target.body.value;

    const commentToPost = {
      body: body,
      username: currentUser.username,
    };

    postComments(id, commentToPost)
      .then((comment) => {
        setNewComment(comment);
      })
      .catch(() => {
        setNewComment({
          author: currentUser.username,
          body: "Please try again later!",
        });
      });

    event.preventDefault();
  };
  return (
    <section>
      <form onSubmit={postComment}>
        <textarea
          placeholder="Leave a comment!"
          id="commentBox"
          name="body"
          rows="6"
          cols="50"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default CommentBox;
