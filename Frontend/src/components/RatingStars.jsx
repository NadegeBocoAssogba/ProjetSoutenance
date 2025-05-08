import React from "react";

const RatingStars = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(
        <span key={i} className="text-yellow-500">
          ★
        </span>
      );
    } else {
      stars.push(
        <span key={i} className="text-gray-300">
          ★
        </span>
      );
    }
  }
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center">{stars}</div>
      <span className="text-sm text-gray-500 ml-2">{rating}</span>
    </div>
  );
};

export default RatingStars;
