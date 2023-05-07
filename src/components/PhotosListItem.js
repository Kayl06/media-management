import { useRemovePhotoMutation } from "../store";
import Button from "./Button"
import { GoTrashcan } from "react-icons/go";

function PhotosListItem({ photo }) {

  const [removePhoto, results] = useRemovePhotoMutation();

  const handleRemovePhoto = () => {
    removePhoto(photo)
  }

  return (
    <div className="relative m-2 cursor-pointer">
      <img src={photo.url} className="" alt="Random pic" />

      <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
        <Button className="rounded text-3xl text-gray-900" onClick={handleRemovePhoto} loading={results.isLoading}>
          <GoTrashcan />
        </Button>
      </div>
    </div>
  );
}

export default PhotosListItem;
