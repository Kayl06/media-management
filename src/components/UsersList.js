import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store";
import Skeleton from "./Skeleton";

function UsersList() {
  const dispatch = useDispatch();

  const { isLoading, error, data } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) {
    return <Skeleton times={6} className="h-10 w-full" />;
  }

  if (error) {
    return <div>Error fetching data...</div>;
  }

  const renderedUsers = data.map((user, index) => {
    return <div key={index}>{user.name}</div>;
  });

  return <div>{renderedUsers || ""}</div>;
}

export default UsersList;
