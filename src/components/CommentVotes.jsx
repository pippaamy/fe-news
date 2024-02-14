import { useState } from "react";
import { patchComment } from "../api";

const CommentVotes = ({ comment }) => {
  const [votes, setVotes] = useState(0);
  const [err, setErr] = useState("");
  const [disabled, setDisabled] = useState(false);

  const upVote = () => {
    setVotes((currentVotes) => {
      setErr("Your vote has been counted!");
      setDisabled(true);
      return currentVotes + 1;
    });
    patchComment(comment.comment_id, 1).catch(() => {
      setVotes((currentVotes) => {
        setErr("Something went wrong, please try again later.");
        return currentVotes - 1;
      });
    });
  };

  return (
    <div>
      <br />
      <p className="font-bold">Votes : {comment.votes + votes}</p>
      <button
        className="bg-[#F67280] font-mono  rounded-xl p-2"
        disabled={disabled}
        onClick={() => {
          upVote(comment.comment_id, true);
        }}
      >
        Like
      </button>
      <p>{err}</p>
    </div>
  );
};

export default CommentVotes;
