import React from "react";

const Book = ({ book }) => {
  const {
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
    <div className="card border-2 rounded-lg shadow-lg p-6 bg-white">
      <figure className="p-10 bg-[#f3f3f3] rounded-lg">
        <img
          className="w-20 h-20 mx-auto object-contain"
          src={image}
          alt={`${bookName} cover`}
        />
      </figure>
      <div className="card-body">
        <div className="text-green-600 font-semibold flex flex-wrap gap-2 mt-2">
          {tags.length > 0 ? (
            tags.slice(0, 2).map((tag, index) => (
              <span key={index} className="badge badge-outline badge-success">
                {tag}
              </span>
            ))
          ) : (
            <span className="text-gray-500">No tags available</span>
          )}
        </div>

        <h2 className="card-title text-lg font-bold mt-4">{bookName}</h2>
        <p className="text-gray-700 text-sm">By: {author}</p>
        <div className="divider my-4"></div>

        <div className="flex items-center justify-between">
          <h4 className="text-blue-600 font-medium">
            {category || "Uncategorized"}
          </h4>
          <span className="text-yellow-500 font-semibold">
            {rating ? `${rating} ⭐` : "No rating"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Book;
