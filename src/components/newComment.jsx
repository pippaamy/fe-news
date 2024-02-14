const NewComment = ({ newComment }) => {
  return (
    <div className="text-lg tracking-tight font-medium text-justify rounded-xl p-3  bg-[#F8B595]">
      <h2 className="font-bold">{newComment.author}</h2>
      <p>{newComment.body}</p>
    </div>
  );
};

export default NewComment;
