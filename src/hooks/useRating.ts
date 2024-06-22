import { useState } from "react";

export const useRating = (
  initialRating: number,
  onRatingChange?: (rating: number) => void
) => {
  const [rating, setRating] = useState(initialRating);
  const totalStars = 5;

  const handleClick = (newRating: number) => {
    setRating(newRating);
    if (onRatingChange) {
      onRatingChange(newRating);
    }
  };

  return {
    rating,
    totalStars,
    handleClick,
  };
};
