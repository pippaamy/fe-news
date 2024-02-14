import { useNavigate } from "react-router";

const Topic = ({ chosenTopic, setChosenTopic, order, sort, topics }) => {
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
      <select
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 btn m-1"
        value={chosenTopic}
        onChange={handleChange}
      >
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
