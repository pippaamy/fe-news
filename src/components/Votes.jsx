import { useState } from "react";
import { patchArticle } from "../api";

const Votes = ({ article }) => {
  const [votes, setVotes] = useState(0);
  const [err, setErr] = useState("");
  const [disabled, setDisabled] = useState(false);

  const upVote = () => {
    setVotes((currentVotes) => {
      setErr("Your vote has been counted!");
      setDisabled(true);
      return currentVotes + 1;
    });
    patchArticle(article.article_id, 1).catch(() => {
      setVotes((currentVotes) => {
        setErr("Something went wrong, please try again later.");
        return currentVotes - 1;
      });
    });
  };

  return (
    <div>
      <p className="votes">Votes : {article.votes + votes}</p>
      <button
        className="bg-[#F67280] font-mono  rounded-xl p-2"
        disabled={disabled}
        onClick={() => {
          upVote(article.article_id, true);
        }}
      >
        Like
      </button>
      <p>{err}</p>
    </div>
  );
};

export default Votes;
