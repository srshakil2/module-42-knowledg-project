const Blog = ({ blog }) => {
  const { authorimg, coverimg, name, publist_date, readTime, title } = blog;

  return (
    <div>
      <img src={coverimg} alt="" />
      <div>
        <div>
          <img src={authorimg} alt="" />
          <div>
            <h4>{name}</h4>
            <p>{publist_date}</p>
          </div>
        </div>
        <div>
          <button>
            <span>{readTime} minit read</span>
            <img
              src="https://img.icons8.com/?size=48&id=F26W35UAB7WL&format=png"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
