import "./App.css";
import Blogs from "./component/Blogs/blogs";
import Bookmarks from "./component/Bookmarks/Bookmarks";

function App() {
  return (
    <>
      <div className=" w-11/12 mx-auto">
        <div className="flex gap-2">
          <Blogs></Blogs>
          <Bookmarks></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;
