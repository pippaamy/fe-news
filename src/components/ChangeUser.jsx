import { useContext, useEffect, useState } from "react";
import { getUsers } from "../api";
import { UserContext } from "./User";

const ChangeUser = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { setCurrentUser } = useContext(UserContext);
  const [err, setErr] = useState(null);

  useEffect(() => {
    getUsers()
      .then((users) => {
        setUsers(users);
        setIsLoading(false);
      })
      .catch(() => {
        setErr(true);
        setIsLoading(false);
      });
  }, []);

  if (err)
    return (
      <p className="loading-error">
        Sorry there has been a problem, please try again!
      </p>
    );
  if (isLoading) return <p className="loading-errors">Loading Users...</p>;
  return (
    <section>
      <ul className="user">
        {users.map((user) => {
          return (
            <li key={user.username}>
              <h2> {user.username}</h2>
              <img
                className="username_images"
                src={user.avatar_url}
                alt={user.username}
              />
              <p>{user.kudos}</p>
              <button onClick={() => setCurrentUser(user)}>
                Select this user!
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ChangeUser;
