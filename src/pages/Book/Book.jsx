import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  //   const data = use(bookPromise);
  //   console.log(data);

  const {
    bookName,
    author,
    bookId,
    publisher,
    image,
    rating,
    category,
    tags,
    yearOfPublishing,
  } = singleBook;

  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div>
        <div className="card bg-base-100 w-96 shadow-sm  p-6">
          <figure className="p-4 bg-gray-100 w-2/3 mx-auto">
            <img className="h-[166px]" src={image} alt="Books" />
          </figure>
          <div className="card-body items-center">
            <div className="flex justify-center gap-2">
              {tags.map((tag) => (
                <button className="text-green-400">{tag}</button>
              ))}
            </div>
            <h2 className="card-title ">
              {bookName}
              <div className="badge badge-secondary">{yearOfPublishing}</div>
            </h2>
            <p>By {publisher}</p>
            <div className="border-t-1 border-dashed"></div>
            <div className="card-actions justify-around">
              <div className="badge badge-inline ">{category}</div>
              <div className="badge badge-inline">
                <FaStarHalfAlt /> {rating}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
