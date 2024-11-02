import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams();
  const data = useLoaderData();

  const id = parseInt(bookId);

  const book = data.find((book) => book.bookId === id);

  const {
    bookId: currentBookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <div className="flex p-6 space-x-6">
      {/* Left side: Image */}
      <div className="w-1/3 p1-0 bg-[#f3f3f3] rounded-lg">
        <img className="w-full" src={image} alt={bookName} />
      </div>

      {/* Right side: Book Details */}
      <div className="w-2/3 space-y-4">
        <h1 className="text-3xl font-bold">{bookName}</h1>
        <p>
          <strong>Author:</strong> {author}
        </p>
        <p>
          <strong>Review:</strong> {review}
        </p>
        <p>
          <strong>Total Pages:</strong> {totalPages}
        </p>
        <p>
          <strong>Rating:</strong> {rating}
        </p>
        <p>
          <strong>Category:</strong> {category}
        </p>
        <p>
          <strong>Tags:</strong> {tags && tags.join(", ")}
        </p>
        <p>
          <strong>Publisher:</strong> {publisher}
        </p>
        <p>
          <strong>Year of Publishing:</strong> {yearOfPublishing}
        </p>
        <div className="space-x-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            Read Now
          </button>
          <button className="px-4 py-2 bg-gray-300 text-black rounded">
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
