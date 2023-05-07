function PhotosListItem({ photo }) {
  return (
    <>
      <img src={photo.url} width={150} height={150}  />
    </>
  );
}

export default PhotosListItem;
