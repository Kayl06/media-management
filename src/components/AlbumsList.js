import { useFetchAlbumsQuery } from "../store";
import ExpandablePanel from "./ExpandablePanel";
import { FiFolder } from "react-icons/fi";

function AlbumsLists({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);

  return (
    <>
      <div>
        Albums by - {user.name}
        {!isLoading && (
          <div className="mt-5">
            {data.map((album, index) => {
              const header = (
                <>
                  <FiFolder />
                  <h1>{album.title}</h1>
                </>
              );
              return (
                <ExpandablePanel header={header} key={index}>
                  <div className="flex flex-wrap gap-2">
                    photos here
                  </div>
                </ExpandablePanel>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default AlbumsLists;
