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
      <ul className="p-5  grid gap-2 grid-cols-4 grid-rows-3">
        {users.map((user) => {
          return (
            <>
              <li
                key={user.username}
                className="text-xl tracking-tight font-medium text-justify rounded-xl p-3  bg-[#F8B595]"
              >
                <h2> {user.username}</h2>
                <img
                  className="p-3 w-24 flex "
                  src={user.avatar_url}
                  alt={user.username}
                />
                <p>{user.kudos}</p>
                <button
                  className="bg-[#C06C84] font-mono  rounded-xl p-2 "
                  onClick={() => setCurrentUser(user)}
                >
                  Select this user!
                </button>
              </li>
              <br />
            </>
          );
        })}
      </ul>
    </section>
  );
};

export default ChangeUser;
