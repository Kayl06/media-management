import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser, deleteUser} from "../store";
import { FaTimesCircle } from "react-icons/fa"
import Button from "./Button";
import Skeleton from "./Skeleton";

function UsersList() {
  const dispatch = useDispatch();

  const { isLoading, error, data } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleUserAdd = () => {
    dispatch(addUser());
  };

  const handleUserDelete = (userId) => {
    dispatch(deleteUser(userId));
  };

  if (isLoading) {
    return <Skeleton times={6} className="h-10 w-full" />;
  }

  if (error) {
    return <div>Error fetching data...</div>;
  }

  const renderedUsers = data.map((user, index) => {
    return (
      <div key={index} className="mb-2 border rounded">
        <div className="flex p-2 justify-between items-center cursor-pointer">
          {user.name}

          <Button className="border border-0" onClick={() => handleUserDelete(user.id)}>
            <FaTimesCircle />
          </Button>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="flex justify-between flex-row m-3">
        <h1 className="m-2 text-xl">Users</h1>

        <Button secondary onClick={handleUserAdd}>
          + Add User
        </Button>
      </div>

      {renderedUsers || ""}
    </div>
  );
}

export default UsersList;
