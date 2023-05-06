import { useFetchPhotosQuery } from "../store";
import Skeleton from "./Skeleton";
import PhotosListItem from "./PhotosListItem";
import Button from "./Button";
import { useCreatePhotoMutation } from "../store/apis/photosApi";

function PhotosList({ album }) {
  const { data, error, isFetching } = useFetchPhotosQuery(album);
  const [createPhoto, results] = useCreatePhotoMutation();

  const handleCreatePhoto = () => {
    createPhoto(album);
  };

  let content;
  if (isFetching) {
    content = <Skeleton times={3} className="h-10 w-full" />;
  } else if (error) {
    content = <div>Error loading albums</div>;
  } else {
    content = data.map((photo, index) => {
      return <PhotosListItem key={photo.id} photo={photo} />;
    });
  }
  return (
    <>
      <div className="mb-10">
        <Button
          loading={results.isLoading}
          className="rounded-sm py-4 uppercase text-[13px] tracking-wider"
          onClick={handleCreatePhoto}
        >
          + Add Photo
        </Button>
      </div>
      {content}
    </>
  );
}

export default PhotosList;
