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
        className="p-2 inline-flex  justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
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
