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
    <section>
      <h3> New Topic</h3>
      <form onSubmit={handleSumbit}>
        <label> Topic name: </label>
        <input onChange={handleSlugChange}></input>
        <label> Topic description: </label>
        <input onChange={handleDescriptionChange}></input>
        <button>Submit</button>
      </form>
      <section>{topicSuccess}</section>
    </section>
  );
};

export default PostTopic;
