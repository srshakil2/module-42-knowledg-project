import { useState } from "react";
import "./App.css";
import Blogs from "./component/Blogs/blogs";
import Bookmarks from "./component/Bookmarks/Bookmarks";

function App() {
  const [bookMarkAdded, setBookmarkAdded] = useState([]);
  const bookMarkFunk = (blog) => {
    setBookmarkAdded([...bookMarkAdded, blog]);
  };

  return (
    <>
      <div className=" w-11/12 mx-auto">
        <div className="flex gap-2">
          <Blogs bookMarkFunk={bookMarkFunk}></Blogs>
          <Bookmarks bookMarkAdded={bookMarkAdded}></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;
