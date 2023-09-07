import React from 'react';
import './review.css';
import StarRating from './starrating';

const Review = () => {
  return (
    <div className='nextlvl__review gradient__bg'>
      <div className="nextlvl__review-title">
        <h1>Client Testimonials</h1>
        <p>Read what our satisfied clients have to say</p>
      </div>
      <div className="nextlvl__review-content">
        <div className="nextlvl__review-content_review">
          <div className="nextlvl__review-content_review-name">
            <h4>Dee H.</h4>
            <StarRating rating={5} />
          </div>
          <p>A breath of fresh air.</p>
        </div>
        <div className="nextlvl__review-content_review">
          <div className="nextlvl__review-content_review-name">
            <h4>Shelley W</h4>
            <StarRating rating={5} />
          </div>
          <p>Highly skilled and very knowledgeable.</p>
        </div>
        <div className="nextlvl__review-content_review">
          <div className="nextlvl__review-content_review-name">
            <h4>Maxwell Y</h4>
            <StarRating rating={5} />
          </div>
          <p>Efficiency has gone through the roof.</p>
        </div>
      </div>
    </div>
  )
}

export default Review
