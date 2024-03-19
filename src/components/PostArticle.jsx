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

    postArticle(currentUser, title, body, pickedTopic, articleImg)
      .then((article) => {
        navigate(`/articles/${article.article_id}`);
      })
      .catch(() => {});
  };
  if (!topics) return <p>Loading...</p>;
  return (
    <section className="font-medium p-5 max-w-3xl mx-auto ">
      <h3 className="text-[#C06C84] p-3 font-bold ">New Article:</h3>
      <form
        className="rounded-xl p-3  bg-[#F8B595] -mx-4 mb-8"
        onSubmit={handleSubmit}
      >
        <div>
          <label className=""> Article Title: </label>
          <input
            placeholder="Write an title..."
            className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 "
            onChange={handleTitleChange}
          ></input>
        </div>

        <div>
          <label className="">Article Body:</label>
          <textarea
            className="block py-10 w-full text-sm text-gray-900 rounded-lg border border-gray-300 "
            placeholder="Write an article..."
            onChange={handleBodyChange}
          ></textarea>
        </div>
        <div>
          <label className=""> Article Image: </label>
          <input
            placeholder="Write an image url..."
            className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300  "
            onChange={handleImageChange}
          ></input>
        </div>
        <section>
          <br />
          <div>
            <label htmlFor="post-review-category">Topic:</label>
            <select
              className="p-2 inline-flex  justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
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
          </div>
        </section>
        <br />
        <button className="bg-[#F67280] font-mono  rounded-xl p-2">
          Submit
        </button>
      </form>
    </section>
  );
};

export default PostArticle;
