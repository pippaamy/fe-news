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
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 btn m-1"
        value={sort}
        onChange={handleChange}
      >
        <option value="author">Author</option>
        <option value="created_at">Date</option>
        <option value="title">Title</option>
        <option value="votes">Votes</option>
      </select>
      <select
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 btn m-1"
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
