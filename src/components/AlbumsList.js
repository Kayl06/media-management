import { useFetchAlbumsQuery, useCreateAlbumMutation } from "../store";
import ExpandablePanel from "./ExpandablePanel";
import Skeleton from "./Skeleton";
import Button from "./Button";
import { FiFolder } from "react-icons/fi";

function AlbumsLists({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  const [createAlbum, results] = useCreateAlbumMutation();

  const handleCreateAlbum = () => {
    createAlbum(user);

    console.log(results);
  };

  let content;
  if (isLoading) {
    content = <Skeleton times={3} />;
  } else if (error) {
    content = <div>Error loading albums</div>;
  } else {
    content = data.map((album, index) => {
      const header = (
        <>
          <div className="flex gap-2 items-center text-sm">
            <FiFolder />
            <h1>{album.title}</h1>
          </div>
        </>
      );
      return (
        <ExpandablePanel header={header} key={album.id}>
          <div className="">List of photos in the album</div>
        </ExpandablePanel>
      );
    });
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="font-bold text-[14px] uppercase tracking-wide">
          Albums by - {user.name}
        </div>
        <Button
          className="rounded-sm py-4 uppercase text-[13px] tracking-wider"
          onClick={handleCreateAlbum}
        >
          + Add album
        </Button>
      </div>
      <div className="mt-5">{content}</div>
    </>
  );
}

export default AlbumsLists;
