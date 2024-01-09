import { useNavigate } from "react-router-dom";

const Sort = ({ setSort, sort, order, setOrder }) => {
  let navigate = useNavigate();

  function handleChange(event) {
    event.preventDefault();
    setSort(event.target.value);
    navigate(`/articles/?sortby=${event.target.value}&order=${order}`, {
      replace: true,
    });
  }

  function handleOrder(event) {
    event.preventDefault();
    setOrder(event.target.value);

    navigate(`/articles/?sortby=${sort}&order=${event.target.value}`, {
      replace: true,
    });
  }
  return (
    <div>
      <select
        className="p-2 inline-flex  justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        value={sort}
        onChange={handleChange}
      >
        <option value="author">Author</option>
        <option value="created_at">Date</option>
        <option value="title">Title</option>
        <option value="votes">Votes</option>
      </select>
      <select
        className="p-2 inline-flex  justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        value={order}
        onChange={handleOrder}
      >
        <option value="ASC">Ascending</option>
        <option value="DESC">Descending</option>
      </select>
    </div>
  );
};

export default Sort;
