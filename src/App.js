import UsersList from "./components/UsersList";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="container mx-auto max-w-[1000px]">
      <UsersList />

      <Cards />
    </div>
  );
}

export default App;
