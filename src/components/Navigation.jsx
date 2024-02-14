import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./User";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <section>
      <nav className="flex items-center justify-between flex-wrap bg-[#C06C84] p-6 font-mono font-bold">
        <Link className="navlink" to="/">
          <p> Home </p>
        </Link>
        <Link className="navlink" to="/articles">
          <p> Articles </p>
        </Link>
        <Link className="userLink" to="/users">
          <p> Users </p>
        </Link>
        <Link className="postLink" to="/post">
          Post
        </Link>
      </nav>
      <section className="text-right p-5  ">
        <h2 className="font-mono ">
          You are logged in as {currentUser.username}
        </h2>
        <div className="ml-auto w-20 ">
          <img src={currentUser.avatar_url} alt={currentUser.username} />
        </div>
      </section>
    </section>
  );
};

export default Navigation;
