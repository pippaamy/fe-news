import { useContext, useState } from "react";
import { UserContext } from "./User";
import { postArticle } from "../api";
import { useNavigate } from "react-router-dom";

const PostArticle = ({ topics }) => {
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [articleImg, setArticleImg] = useState("");
  const [pickedTopic, setPickedTopic] = useState("coding");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };
  const handleImageChange = (event) => {
    setArticleImg(event.target.value);
  };
  const handleTopicChange = (event) => {
    setPickedTopic(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    postArticle(currentUser, title, body, pickedTopic, articleImg).then(
      (article) => {
        navigate(`/articles/${article.article_id}`);
      }
    );
  };
  return (
    <section>
      <h3 className="text-[#C06C84] p-3">New Article:</h3>
      <form className="rounded-xl p-3  bg-[#F8B595]" onSubmit={handleSubmit}>
        <label> Article Title: </label>
        <input onChange={handleTitleChange}></input>
        <label> Article Body: </label>
        <input onChange={handleBodyChange}></input>
        <label> Article Image: </label>
        <input onChange={handleImageChange}></input>
        <section>
          <label htmlFor="post-review-category">Topic: </label>
          <select
            id="post-review-category"
            name="topic"
            onChange={handleTopicChange}
          >
            {topics.map((topic) => {
              return (
                <option key={topic.slug} value={topic.slug}>
                  {topic.slug}
                </option>
              );
            })}
          </select>
        </section>
        <button className="bg-[#F67280] font-mono  rounded-xl p-2">
          Submit
        </button>
      </form>
    </section>
  );
};

export default PostArticle;
