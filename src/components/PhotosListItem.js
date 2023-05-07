import { useRemovePhotoMutation } from "../store";
import Button from "./Button"
import { GoTrashcan } from "react-icons/go";

function PhotosListItem({ photo }) {

  const [removePhoto, results] = useRemovePhotoMutation();

  const handleRemovePhoto = () => {
    removePhoto(photo)
  }

  return (
    <div className="relative">
      <img src={photo.url} />

      <Button className="mt-2 rounded" onClick={handleRemovePhoto} loading={results.isLoading}>
        <GoTrashcan />
      </Button>
    </div>
  );
}

export default PhotosListItem;
