import { useContext } from "react";
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
          body: "Oops. Please try again",
        });
      });

    event.preventDefault();
  };
  return (
    <section>
      <form
        className=" flex justify-center items-center rounded-xl"
        onSubmit={postComment}
      >
        <textarea
          placeholder="  Leave a comment!  "
          id="commentBox"
          name="body"
          rows="6"
          cols="100"
        ></textarea>
        <br />
        <button
          className=" bg-[#F67280] font-mono  rounded-xl p-3"
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default CommentBox;
