import { FC } from "react";
import { StarFilled, Star } from "@/components/atoms/Icon";
import { useRating } from "@/hooks/useRating";

interface RateProps {
  initialRating: number;
  onRatingChange?: (rating: number) => void;
}

const Rate: FC<RateProps> = ({ initialRating, onRatingChange }) => {
  const { rating, totalStars, handleClick } = useRating(
    initialRating,
    onRatingChange
  );

  return (
    <div className="flex">
      {Array.from({ length: totalStars }).map((_, index) => {
        const starNumber = index + 1;
        return (
          <span key={starNumber} onClick={() => handleClick(starNumber)}>
            {starNumber <= rating ? <StarFilled /> : <Star />}
          </span>
        );
      })}
    </div>
  );
};

export default Rate;
