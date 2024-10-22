import { useState } from "react";
import { useEffect } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/public/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  // console.log(blogs);
  return (
    <div className=" w-2/3">
      {blogs.map((blog, idx) => (
        <Blog key={idx} blog={blog}></Blog>
      ))}
    </div>
  );
};

export default Blogs;
