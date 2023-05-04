import { useFetchAlbumsQuery } from "../store";

function AlbumsLists({ user }) {

  const { data, error, isLoading } = useFetchAlbumsQuery(user);

  console.log(data, error, isLoading);
  return <>Albums by - {user.name}</>;
}

export default AlbumsLists;
