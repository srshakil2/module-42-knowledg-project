const Bookmarks = ({ bookMarkAdded }) => {
  // console.log(bookMarkAdded);
  return (
    <div className=" w-1/3 py-5 space-y-3">
      <h5 className="text-xl font-semibold bg-purple-100 text-center border-2 rounded-xl p-3">
        Spent time on read :
      </h5>
      <div className="bg-gray-200 text-center p-4 space-y-3">
        <h5 className="text-xl font-semibold">
          Bookmark Blogs : {bookMarkAdded.length}
        </h5>
        {bookMarkAdded.map((bookMark) => {
          return (
            <p
              className="bg-white rounded-xl text-lg font-semibold p-3"
              key={bookMark.id}
            >
              {bookMark.title}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Bookmarks;
