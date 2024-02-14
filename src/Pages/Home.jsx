import UserResults from "../Components/Users/UserResults";
import UserSearch from "../Components/Users/UserSearch";

function Home() {
  return (
    <div>
      <h1 className="text-6xl">
        <UserResults />
        <UserSearch />
      </h1>
    </div>
  );
}
export default Home;
