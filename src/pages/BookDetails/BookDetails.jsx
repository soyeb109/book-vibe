import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../utils/addToDB";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);
  // console.log(singleBook);
  const {
    bookName,
    image,
    review,
    totalPages,
    author,
    category,
    tags,
    yearOfPublishing,
    publisher,
    rating,
  } = singleBook;

  // handler

  const handleMarkAsRead = (id) => {
    // store with id
    // where to store
    // array or collection
    // if book already exixt then show a alert
    // if book not exixt then push in the collection or array
    addToStoredDB(id);
  };

  return (
    <div className="hero bg-base-200 min-h-screen ">
      <div className="hero-content flex-col lg:flex-row">
        <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold py-2">{bookName}</h1>
          <p className="my-2">By {author}</p>
          <p className="my-2"> {category}</p>
          <p>
            <span className="text-md mr-2 font-bold ">Review:</span>
            {review}
          </p>
          <div className="flex justify-start gap-2 my-2">
            <h1 className="font-bold mr-2 my-2">Tag</h1>
            {tags.map((tag) => (
              <button className="text-green-400">{tag}</button>
            ))}
          </div>
          <div className="flex flex-col gap-4 mb-2">
            <p className="flex gap-2">
              <span>Number of Pages:</span>
              <span>{totalPages}</span>
            </p>
            <p className="flex gap-2">
              <span>Publish Date:</span>
              <span>{yearOfPublishing}</span>
            </p>
            <p className="flex gap-2">
              <span>Publisher:</span>
              <span>{publisher}</span>
            </p>
            <p className="flex gap-2">
              <span>Rating:</span>
              <span>{rating}</span>
            </p>
          </div>
          <div className="flex justify-start gap-4">
            {" "}
            <button
              onClick={() => handleMarkAsRead(id)}
              className="btn btn-accent"
            >
              Mark as Read
            </button>
            <button className="btn btn-primary">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
