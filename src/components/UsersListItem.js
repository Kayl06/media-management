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
      <div className="flex justify-between items-center">
        <AlbumsLists user={user} />

        <Button
          className="rounded-sm py-4 uppercase text-[13px] tracking-wider"
          onClick={() => alert(`should be add a new album`)}
        >
          + Add album
        </Button>
      </div>
    </ExpandablePanel>
  );
}

export default UserListItem;
