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
    <div className="flex">
      <p className=" p-5 text-xl font-bold">❤️ : {article.votes + votes}</p>
      <button
        className="bg-[#F67280] font-mono  rounded-xl p-4"
        disabled={disabled}
        onClick={() => {
          upVote(article.article_id, true);
        }}
      >
        Like
      </button>
      <p className="p-2 text-md tracking-tight font-bold text-justify ">
        {err}
      </p>
    </div>
  );
};

export default Votes;
