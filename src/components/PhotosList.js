import Skeleton from "./Skeleton";
import Button from "./Button";
import { useFetchPhotosQuery, useCreatePhotoMutation } from "../store";
import PhotosListItem from "./PhotosListItem";

function PhotosList({ album }) {
  const { data, error, isFetching } = useFetchPhotosQuery(album);
  const [createPhoto, createPhotoResults] = useCreatePhotoMutation();

  const handleCreatePhoto = () => {
    createPhoto(album);
  };

  let content;
  if (isFetching) {
    content = <Skeleton times={6} className="h-8 w-full" />;
  } else if (error) {
    content = <div>Error fetching photos</div>;
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
          loading={createPhotoResults.isLoading}
          className="rounded-sm py-4 uppercase text-[13px] tracking-wider"
          onClick={handleCreatePhoto}
        >
          + Add Photo
        </Button>
      </div>

      <div className="gap-2 flex-wrap flex justify-center">
        {content}
      </div>
    </>
  );
}

export default PhotosList;
