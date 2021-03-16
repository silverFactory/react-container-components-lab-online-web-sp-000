import React from 'react'

function MovieReviews(props){
  return (
    <div className="review-list">
      {props.reviews.map(review =>
        <div className="review" key={review.display_title}>
          <h2>{review.headline}</h2>
          <img src={review.multimedia.src} alt="img" />
          <p>{review.summary_short}</p>
        </div>)}
    </div>
  )
}

export default MovieReviews
