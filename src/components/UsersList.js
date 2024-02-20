import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import useThunk from "../hooks/use-thunk";
import Button from "./Button";
import Skeleton from "./Skeleton";
import UserListItem from "./UsersListItem";

function UsersList() {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);

  const [doCreateUser, isCreatingUser, creatingUserLoader] = useThunk(addUser);

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

  let content;
  if (isLoadingUsers) {
    content = <Skeleton times={6} className="h-10 w-full" />;
  } else if (loadingUsersError) {
    content = <div>Error fetching data...</div>;
  } else {
    const renderedUsers = data.map((user, index) => {
      return <UserListItem key={index} user={user} />;
    });

    content = renderedUsers;
  }

  return (
    <div>
      <div className="flex justify-between flex-row m-3">
        <h1 className="m-2 text-md font-bold uppercase tracking-wider">Users</h1>

        <Button
          loading={isCreatingUser}
          secondary
          onClick={handleUserAdd}
          className="uppercase text-[13px] tracking-wider rounded py-5"
        >
          + Add User
        </Button>

        {creatingUserLoader && "Error creating user"}
      </div>

      <div className="mt-5">{content}</div>
    </div>
  );
}

export default UsersList;
