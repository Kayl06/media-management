import { useFetchPhotosQuery, useCreatePhotoMutation } from "../store";
import Skeleton from "./Skeleton";
import PhotosListItem from "./PhotosListItem";
import Button from "./Button";

function PhotosList({ album }) {
  const { data, error, isFetching } = useFetchPhotosQuery(album);
  const [ createPhoto, results ] = useCreatePhotoMutation();

  const handleCreatePhoto = () => {
    createPhoto(album);
  };

  let content;
  if (isFetching) {
    content = <Skeleton times={6} className="h-10 w-full" />;
  } else if (error) {
    content = <div>Error loading albums</div>;
  } else {
    content = data.map((photo, index) => {
      return <PhotosListItem key={photo.id} photo={photo} />;
    });
  }
  return (
    <>
      <div className="mb-10 flex justify-between">
        <div className="font-bold text-[14px] uppercase tracking-wide">
          Photos in Album - {album.title}
        </div>
        <Button
          loading={results.isLoading}
          className="rounded-sm py-4 uppercase text-[13px] tracking-wider"
          onClick={handleCreatePhoto}
        >
          + Add Photo
        </Button>
      </div>

      <div className="grid lg:grid-cols-6 gap-4 grid-cols-4">
        {content}
      </div>
    </>
  );
}

export default PhotosList;
