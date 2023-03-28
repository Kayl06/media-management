import useThunk from "../hooks/use-thunk";
import Button from "./Button";
import { GoTrashcan } from "react-icons/go";
import { deleteUser } from "../store";

function UserListItem({ user }) {
  const [doDeleteUser, isLoading, error] = useThunk(deleteUser);

  const handleUserDelete = () => {
    doDeleteUser(user);
  };

  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        <div className="flex gap-2 items-center">
          <Button
            loading={isLoading}
            className="border border-0"
            onClick={() => handleUserDelete()}
          >
            {error && "Error deleting user..."}
            <GoTrashcan />
          </Button>
          {user.name}
        </div>
      </div>
    </div>
  );
}

export default UserListItem;
