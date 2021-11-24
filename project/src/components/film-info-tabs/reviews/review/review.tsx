import {formatDate} from '../../../../utils/date';
import {formatRating} from '../../../../utils/utils';
import {ReviewType} from '../../../../types/review-type';

type ReviewProps = {
  review: ReviewType,
}

function Review(props: ReviewProps): JSX.Element {
  const { comment, date, user, rating } = props.review;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>
        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time
            className="review__date"
            dateTime={formatDate(date, 'YYYY-MM-DD')}
          >
            {formatDate(date, 'MMMM DD, YYYY')}
          </time>
        </footer>
      </blockquote>
      <div className="review__rating">{formatRating(rating)}</div>
    </div>
  );
}

export default Review;
