const Blog = ({ blog, bookMarkFunk }) => {
  //   console.log(key);
  const { authorimg, coverimg, name, publist_date, readTime, title, hashtag } =
    blog;

  return (
    <div className="pb-5 pt-5 border-b-2 space-y-3">
      <img className="rounded-xl" src={coverimg} alt="" />
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            className=" rounded-full w-[80px] h-[80px] object-cover"
            src={authorimg}
            alt=""
          />
          <div>
            <h4 className="text-xl font-bold">{name}</h4>
            <p className="font-semibold">{publist_date}</p>
          </div>
        </div>
        <div>
          <button
            onClick={() => bookMarkFunk(blog)}
            className=" flex items-center bg-yellow-50 p-3 btn"
          >
            <span className="text-lg font-semibold">{readTime} minit read</span>
            <img
              src="https://img.icons8.com/?size=48&id=F26W35UAB7WL&format=png"
              alt=""
            />
          </button>
        </div>
      </div>
      <p className="text-2xl font-bold">{title}</p>
      <p>{hashtag}</p>
      <button
        type="button"
        className="border-b-2 border-pink-700 text-lg text-pink-700"
      >
        Mark As Read
      </button>
    </div>
  );
};

export default Blog;
