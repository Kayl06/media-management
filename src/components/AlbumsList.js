import { useFetchAlbumsQuery, useCreateAlbumMutation } from "../store";
import Skeleton from "./Skeleton";
import AlbumsListItem from "./AlbumsListItem";
import Button from "./Button";

function AlbumsLists({ user }) {
  const { data, error, isFetching } = useFetchAlbumsQuery(user);
  const [createAlbum, results] = useCreateAlbumMutation();

  const handleCreateAlbum = () => {
    createAlbum(user);
  };

  let content;
  if (isFetching) {
    content = <Skeleton times={3} className="h-10 w-full" />;
  } else if (error) {
    content = <div>Error loading albums</div>;
  } else {
    content = data.map((album, index) => {
      return <AlbumsListItem key={album.id} album={album} />;
    });
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="font-bold text-[14px] uppercase tracking-wide">
          Albums by - {user.name}
        </div>
        <Button
          loading={results.isLoading}
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
