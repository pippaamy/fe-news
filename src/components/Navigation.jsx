import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./User";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <section>
      <nav className="nav">
        <Link className="navlink" to="/">
          <p> Home</p>
        </Link>
        <Link className="navlink" to="/articles">
          <p> Articles</p>
        </Link>
        <Link className="userLink" to="/users">
          <p>Users</p>
        </Link>
      </nav>
      <h2 className="currentUser_text">
        You are logged in as {currentUser.username}
      </h2>
      <img
        className="username_images"
        src={currentUser.avatar_url}
        alt={currentUser.username}
      />
    </section>
  );
};

export default Navigation;
