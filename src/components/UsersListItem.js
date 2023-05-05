import useThunk from "../hooks/use-thunk";
import Button from "./Button";
import { GoTrashcan } from "react-icons/go";
import { deleteUser } from "../store";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsLists from "./AlbumsList";

function UserListItem({ user }) {
  const [doDeleteUser, isLoading, error] = useThunk(deleteUser);

  const handleUserDelete = () => {
    doDeleteUser(user);
  };

  const header = (
    <>
      <Button
        loading={isLoading}
        className="border rounded"
        onClick={() => handleUserDelete()}
      >
        {error && "Error deleting user..."}
        <GoTrashcan />
      </Button>
      {user.name}
    </>
  );

  return (
    <ExpandablePanel header={header}>
      <AlbumsLists user={user} />
    </ExpandablePanel>
  );
}

export default UserListItem;
