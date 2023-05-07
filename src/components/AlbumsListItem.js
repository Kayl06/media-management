import Button from "./Button";
import { useRemoveAlbumMutation } from "../store";
import { GoTrashcan } from "react-icons/go";
import ExpandablePanel from "./ExpandablePanel";
import PhotosList from "./PhotosList";

function AlbumsListItem({ album }) {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleDeleteAlbum = () => {
    removeAlbum(album);
  };

  const header = (
    <>
      <div className="flex gap-2 items-center text-sm">
        <Button
          className="rounded"
          loading={results.isLoading}
          onClick={handleDeleteAlbum}
        >
          <GoTrashcan />
        </Button>
        <h1>{album.title} {album.id}</h1>
      </div>
    </>
  );

  return (
    <ExpandablePanel header={header} key={album.id}>
      <div className="">
        <PhotosList album={album} />
      </div>
    </ExpandablePanel>
  );
}

export default AlbumsListItem;
