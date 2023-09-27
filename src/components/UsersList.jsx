import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUSers } from "../store/usersSlice";
import UserItem from "./UserItem";

const UsersList = () => {
  const { users, error, loading } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUSers());
  }, []);

  return (
    <>
      {error ? (
        <div>
          <h3>something</h3>
        </div>
      ) : (
        <>
          {loading && <h3>loading</h3>}
          <ul>
            {users.map((user) => (
              <UserItem key={user.id} user={user} />
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default UsersList;
