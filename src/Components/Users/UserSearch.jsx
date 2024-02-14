import { useState, useContext } from "react";
import GithubContext from "../../Context/GithubContext";

function UserSearch() {
  const { searchUsers, users, clearUser } = useContext(GithubContext);
  const [text, setText] = useState("");
  const [alert, setAlert] = useState({ message: "", display: false });
  const handleChange = (e) => {
    setText(e.target.value);
    setAlert({
      message: "",
      display: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") {
      setAlert({
        message: "Please Enter Some Text!",
        display: true,
      });
    } else {
      searchUsers(text);
      setAlert({
        message: "",
        display: false,
      });

      setText("");
    }
  };

  return (
    <div
      className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2
 md:grid-cols-2 mb-8 gap-8"
    >
      <div>
        {alert.display && (
          <div role="alert" className="alert alert-warning w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span className="text-2xl ">{alert.message}</span>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg
 text-black"
                placeholder="Search"
                value={text}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="!absolute top-3.5 right-0 rounded-l-none w-35
btn btn-lg"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button onClick={clearUser} className="btn btn-ghost btn-lg">
            {" "}
            Clear
          </button>
        </div>
      )}
    </div>
  );
}
export default UserSearch;
