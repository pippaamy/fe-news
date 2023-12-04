import { useEffect, useState } from "react";
import { getTopics } from "../api";
import { useNavigate } from "react-router";

const Topic = ({
  chosenTopic,
  setChosenTopic,
  order,
  sort,
  topics,
  setTopics,
}) => {
  useEffect(() => {
    getTopics().then(({ topics }) => {
      setTopics(topics);
    });
  }, [topics]);
  let navigate = useNavigate();

  async function handleChange(event) {
    event.preventDefault();

    await setChosenTopic(event.target.value);

    navigate(
      `/articles/?topic=${event.target.value}&sortby=${sort}&order=${order}`,
      { replace: true }
    );
  }

  return (
    <div>
      <select className="dropdown" value={chosenTopic} onChange={handleChange}>
        <option value="">ALL</option>
        {topics.map((topics) => {
          return (
            <option key={topics.slug} value={topics.slug}>
              {topics.slug.toUpperCase()}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Topic;
