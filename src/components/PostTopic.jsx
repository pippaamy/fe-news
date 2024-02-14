import { useState } from "react";
import { postTopic } from "../api";

const PostTopic = ({ topics }) => {
  const [topicSlug, setTopicSlug] = useState("");
  const [newTopic, setNewTopic] = useState("");
  const [topicSuccess, setNewTopicSuccess] = useState("");
  const [topicDescription, setTopicDescription] = useState("");
  const handleSlugChange = (event) => {
    setTopicSlug(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setTopicDescription(event.target.value);
  };
  const handleSumbit = (event) => {
    event.preventDefault();
    postTopic(topicSlug, topicDescription).then((topic) => {
      setNewTopic(topic);
      setNewTopicSuccess(`You have added topic: ${topic.slug}`);
    });
  };

  return (
    <section className="font-medium p-5 max-w-3xl mx-auto">
      <h3 className="text-[#C06C84] p-3 font-bold"> New Topic:</h3>
      <form
        className="rounded-xl p-3  bg-[#F8B595] flex flex-wrap -mx-3 mb-8"
        onSubmit={handleSumbit}
      >
        <label> Topic name: </label>
        <input
          placeholder="Write an topic name..."
          className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300  "
          onChange={handleSlugChange}
        ></input>
        <label> Topic description: </label>
        <input
          placeholder="Write an topic description..."
          className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300  "
          onChange={handleDescriptionChange}
        ></input>

        <br />
        <button className="bg-[#F67280] font-mono  rounded-xl p-2">
          Submit
        </button>
      </form>
      <section>{topicSuccess}</section>
    </section>
  );
};

export default PostTopic;
