import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = (rating - fullStars) > 0 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <div className="nextlvl__review-content_stars">
      {[...Array(fullStars)].map((_, i) => (
        <FontAwesomeIcon key={i} icon={faStar} />
      ))}
      {[...Array(halfStar)].map((_, i) => (
        <FontAwesomeIcon key={i + fullStars} icon={faStarHalfAlt} />
      ))}
      {[...Array(emptyStars)].map((_, i) => (
        <FontAwesomeIcon key={i + fullStars + halfStar} icon={faStarEmpty} />
      ))}
    </div>
  );
}

export default StarRating;
