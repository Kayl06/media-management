import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser, deleteUser } from "../store";
import useThunk from "../hooks/use-thunk";
import Button from "./Button";
import Skeleton from "./Skeleton";
import UserListItem from "./UserListItem";

function UsersList() {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);

  const [doCreateUser, isCreatingUser, creatingUserLoader] = useThunk(addUser);

  const dispatch = useDispatch();

  const { data } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handleUserAdd = () => {
    // dispatch.then() chain will output either success or error
    // dispatch.unwrap().then() will catch all success
    // dispatch.unwrap().catch() will catch all error
    // dispatch.unwrap().finally() will catch either error or success

    // setIsCreatingUser(true);
    // dispatch(addUser())
    //   .unwrap()
    //   .catch((err) => setCreateUserLoader(err))
    //   .finally(() => {
    //     setIsCreatingUser(false);
    //   });

    doCreateUser();
  };

  if (isLoadingUsers) {
    return <Skeleton times={6} className="h-10 w-full" />;
  }

  if (loadingUsersError) {
    return <div>Error fetching data...</div>;
  }

  const renderedUsers = data.map((user, index) => {
    return <UserListItem key={index} user={user} />;
  });

  return (
    <div>
      <div className="flex justify-between flex-row m-3">
        <h1 className="m-2 text-xl">Users</h1>

        <Button loading={isCreatingUser} secondary onClick={handleUserAdd}>
          + Add User
        </Button>

        {creatingUserLoader && "Error creating user"}
      </div>

      {renderedUsers}
    </div>
  );
}

export default UsersList;
