const NewComment = ({ newComment }) => {
  return (
    <div className="comments">
      <h2>{newComment.author}</h2>
      <p>{newComment.body}</p>
    </div>
  );
};

export default NewComment;
