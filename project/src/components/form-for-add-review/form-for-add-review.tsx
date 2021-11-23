import {Fragment, ChangeEvent, useState} from 'react';

function FormForAddReview (): JSX.Element {
  const RATING_SCALE_STEPS_COUNT = 10;
  const MIN_REVIEW_LENGTH = 50;
  const MAX_REVIEW_LENGTH = 400;

  const [reviewText, setReviewText] = useState('');
  const [currentRating, setCurrentRating] = useState(0);

  const ratingScaleSteps: number[] = Array(RATING_SCALE_STEPS_COUNT).fill('').map((_, i) => i + 1).reverse();

  const handleReviewTextChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setReviewText(evt.target.value);
  };

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setCurrentRating(+evt.target.value);
  };

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {ratingScaleSteps.map((idx: number) => {
            const isChecked = idx === currentRating;

            return (
              <Fragment key={idx}>
                <input
                  className="rating__input"
                  id={`star-${idx}`} type="radio"
                  name="rating"
                  value={idx}
                  checked={isChecked}
                  onChange={handleRatingChange}
                />
                <label
                  className="rating__label"
                  htmlFor={`star-${idx}`}
                >
                Rating {idx}
                </label>
              </Fragment>
            );
          })}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          value={reviewText}
          onChange={handleReviewTextChange}
        />
        <div className="add-review__submit">
          <button
            className="add-review__btn"
            type="submit"
            disabled={reviewText.length < MIN_REVIEW_LENGTH || reviewText.length > MAX_REVIEW_LENGTH || currentRating === 0}
          >
            Post
          </button>
        </div>
      </div>
    </form>
  );
}

export default FormForAddReview;
