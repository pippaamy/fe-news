import { useContext, useEffect, useState } from "react";
import { getUsers } from "../api";
import { UserContext } from "./User";

const ChangeUser = () => {
  const [users, setUsers] = useState([]);
  const { setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    });
  }, []);

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
